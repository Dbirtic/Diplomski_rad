const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const fs = require('fs');
const cheerio = require('cheerio');
const serveStatic = require('serve-static');
const check = require('express-validator/check');

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

// Bring in Factory functions
let FactoryFunc = require('C:/Users/Dominik/Desktop/google/blockly-moj_projekt/demos/blockfactory/factory_utils_copy');

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
app.use(express.static('C:/Users/Dominik/Desktop/google/blockly-moj_projekt/'));

// Loading Custom Blocks
router.get('/load_blocks', function(req, res){
    // query which finds all blocks inside collection
    Block.find({}).select('content -_id').exec(function(err, blocks){
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

// Get Block Factory or Blockly Developer Tools
app.get('/block_factory', function(req, res){
  // serving static files for the Block Factory file
  app.use(serveStatic(path.join(__dirname + './closure-library/closure/goog/base.js')));
  app.use(serveStatic(path.join(__dirname, './blockfactory/')));
  app.use(serveStatic(path.join(__dirname, './blockfactory/workspacefactory/')));
  app.use(serveStatic('C:/Users/Dominik/Desktop/google/blockly-moj_projekt/appengine/storage.js'));
  app.use(serveStatic('C:/Users/Dominik/Desktop/google/blockly-moj_projekt/msg/js/'));

  // sending block-factory_index.html to the client
  res.sendFile('C:/Users/Dominik/Desktop/google/blockly-moj_projekt/demos/blockfactory/block-factory_index.html');
});

app.get('/previous_tedd', function(req, res){
  // static serving needed files for previous tedd - needs some fixing
  app.use(serveStatic(path.join(__dirname +'../../ividovi2-tedd-fe0138a5b5ec/google-blockly-e0be7e4/demos/code/')));
  app.use(serveStatic(path.join(__dirname +'../../ividovi2-tedd-fe0138a5b5ec/google-blockly-e0be7e4/demos/code/style.css')));
  //app.use(serveStatic(path.join(__dirname +'../../ividovi2-tedd-fe0138a5b5ec/TEDD/')));
  //app.use(serveStatic('C:/Users/Dominik/Desktop/google/blockly-moj_projekt/demos/ividovi2-tedd-fe0138a5b5ec/TEDD/TEDD_Blocks.js'));
  //app.use(serveStatic('C:/Users/Dominik/Desktop/google/blockly-moj_projekt/demos/ividovi2-tedd-fe0138a5b5ec/TEDD/TEDD_Blocks_generator.js'));

  // sending previous tedd to the client
  res.sendFile('C:/Users/Dominik/Desktop/google/blockly-moj_projekt/demos/ividovi2-tedd-fe0138a5b5ec/google-blockly-e0be7e4/demos/code/index_RTRK_test.html');
});


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

// Block Factory Add Blocks Submit POST Route
app.post('/block_factory', function(req, res){
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('category', 'Category is required').notEmpty();
  req.checkBody('content', 'Content is required').notEmpty();

  // Get Errors
  let errors = req.validationErrors();

  if(errors){
    console.log(errors);
  }
  else{
    let block = new Block(); // stvara objekt koji je model Block
    block.name = req.body.name; // sprema name iz onoga sto je uneseno na stranici
    block.content = req.body.content; // sprema content iz onoga sto je uneseno na stranici
    var categ = req.body.category;

    fs.readFile('./index.html', 'utf8', function(err, data) {

      if (err){ 
        throw err;
      }
      
      // ucitavanje html-a i unos novog bloka u html
      var $ = cheerio.load(data);
      $('#'+categ).append('<block type="'+block.name+'" class="'+block.name+'"></block>').append('\n');

      fs.writeFile('./index.html', $.html(), function(err){
        if(err){
          console.log(err);
        }
        console.log("New block was successfully added and index.html was successfully overwritten!");
      });
    });

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

  Block.findById(req.params.id, function(err, block){
    if(err) {
      console.log(err);
    }
    else{
    fs.readFile('./index.html', 'utf8', function(err, data) {
      if (err){ 
        throw err;
      }
      var $ = cheerio.load(data);
      
      $('.'+block.name).remove();
      fs.writeFile('./index.html', $.html(), function(err){
        if(err){
          console.log(err);
        }
        console.log("Block "+block.name+" was deleted and index.html was successfully overwritten!");
      });
    });
  } // kraj else bloka
  }); // kraj findById bloka

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