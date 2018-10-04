//express
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
//mongoose
const mongoose = require('mongoose');


  
//mongo
mongoose.connect('mongodb://localhost:27017/myDb');
//middleware

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../dist/MEAN-Library-App'));



require('./routes')(app);


//start server
app.listen(8080,()=>{
    console.log('>>> Open http://127.0.0.1:%s/ in your browser.','8080');

    
});