//require express
const express = require('express');
const app = express();
const port = process.env.PORT || 6000;
// const { MongoClient }  = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const path = require('path');



//##### middlewares begin

// use bodyparser
app.use(bodyParser.json());

//cors
app.use(cors());

//join path
app.use(express.static(__dirname + '/public'));


// import the routes
const routes = require('./routes/posts');

// routes
app.use('/', routes);

//######## middlewares end

// get index.html page
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/save-data', (req, res) => {
    console.log(req.body);
})



const dbURL = process.env.DB_CONNECTION2;
//connect to the database
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection to database successful');
      
    })
    .catch((err) => {
        console.log('Error connecting to database');
        // console.log(err);
    })


    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
      })