const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const fs = require('fs');

const router = express.Router();


mongoose.connect('mongodb://localhost/Blockly', { useNewUrlParser:true});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
let db = mongoose.connection;

// Check Connection
db.once('open', function(){
    console.log('Connected to Blockly database');
});

// Check for DB errors
db.on('error', function(err){
    console.log(err);
});

// Init app
const app = express();

// Bring in Models
let Block = require('./models/block');

// Load View Enginge
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next){
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace = param.split('.')
    , root    = namespace.shift()
    , formParam = root;

    while(namespace.length){
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// "sluzenje"/"serviranje" blockly dokumenata kako bi Blockly i njegovo sučelje radili
app.use(express.static('C:/Users/Dominik/Desktop/google-blockly-moj_projekt/'));

// Loading Custom Blocks
router.get('/load_blocks', function(req, res){
  // query which finds all blocks inside collection
  Block.find({}).select('content -_id').exec(function(err, blocks){
    var strings = [];
    if(err){
      console.log(err);
    }
    else {
      // Sends read database field to the client
      res.send(blocks.map(block => block.content).join('\n'));
    }
  });
});

// Home Route
router.get('/',function(req, res){
  // opens the blockly index.html
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.use('/', router);

var first_half = '';

// Get Single Block
app.get('/blocks/:id', function(req, res){
  Block.findById(req.params.id, function(err, block){
    res.render('block', {
      block: block
    });
  });
});


// Add Blocks Route
app.get('/add_blocks', function(request, response){
  response.render('add_block', {
    title:'Add Block'
  })
});

// Add Blocks Submit POST Route
app.post('/add_blocks', function(req, res){
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('content', 'Content is required').notEmpty();

  // Get Errors
  let errors = req.validationErrors();

  if(errors){
    res.render('add_block', {
      title:'Add Block',
      errors:errors
    });
  }
  else{
    let block = new Block(); // stvara objekt koji je model Block
    block.name = req.body.name; // sprema name iz onoga sto je uneseno na stranici
    block.content = req.body.content; // sprema content iz onoga sto je uneseno na stranici

    block.save(function(err){
      if(err)
      {
        console.log(err);
        return;
      }
      else{
        req.flash('success', 'Block added');
        res.redirect('/blocks/');
      }
    
    });
  }
});

// Edit Blocks Route
app.get('/blocks/edit/:id', function(req, res){
  Block.findById(req.params.id, function(err, block){
    res.render('edit_block', {
      title: 'Edit Block',
      block: block
    });
  });
});

// Edit Blocks Submit POST Route
app.post('/blocks/edit/:id', function(req, res){
  let block = {}; // prazan objekt u koji ce se staviti azurirani block
  block.name = req.body.name; // sprema name iz onoga sto je uneseno na stranici
  block.content = req.body.content; // sprema content iz onoga sto je uneseno na stranici

  let query = {_id:req.params.id}; // trazi id bloka kojeg zelimo azurirati

  Block.updateOne(query, block, function(err){
    if(err)
    {
      console.log(err);
      return;
    }
    else{
      req.flash('success', 'Block updated');
      res.redirect('/blocks/');
    }
  });
});

// DELETE Route
app.delete('/blocks/:id', function(req, res){
  let query = {_id:req.params.id};

  Block.deleteOne(query, function(err){
    if(err){
      console.log(err);
    }
    res.send('Success');
  });
});

// Blocks Route
app.get('/blocks', function(req, res){
  Block.find({}).exec(function(err, blocks){
    if(err){
      console.log(err);
    }
    else {
      res.render('index', {
        title:'Blocks',
        blocks: blocks
      });
    }
  });
});

// Start Server
app.listen(8888, function(){
    console.log('Server started on port 8888...')
});