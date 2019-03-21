let mongoose = require('mongoose'); 
let Schema = mongoose.Schema;

// Block Schema
let blockSchema = Schema({
    name:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
});

let Block = module.exports = mongoose.model('Block', blockSchema, "test_blocks");

// kada se prave scheme onda se automatski prave indeksi
// buduci da to utjece na performanse bila bi dobra ideja jedna od iducih
/*
    mongoose.connect('mongodb://user:pass@localhost:port/database', { autoIndex: false });
// or
    mongoose.createConnection('mongodb://user:pass@localhost:port/database', { autoIndex: false });
// or
    animalSchema.set('autoIndex', false);
// or
    new Schema({..}, { autoIndex: false });
*/