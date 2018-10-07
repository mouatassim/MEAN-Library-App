const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    isbn:{
        type: String,
        default: ""
    },
    author:{
        type: String,
        default: ""
    },
    title:{
        type: String,
        default: ""
    },
    language:{
        type: String,
        default: ""
    },
    type:{
        type: String,
        default: ""
    },
    nbrPages:{
        type: Number
    },
    publisher:{
        type: String,
        default: ""
    },
    year:{
        type: Number
    },
    cover:{
        type: String,
        default: ""
    },
    description:{
        type: String,
        default: ""
    }

})

const Books = mongoose.model('Books',BookSchema);

//export model
module.exports = Books;