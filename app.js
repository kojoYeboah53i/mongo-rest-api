//require express
const express = require('express');
const app = express();
const port = process.env.PORT || 6000;
// const { MongoClient }  = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
//require path
const path = require('path');


// use bodyparser
app.use(bodyParser.json());

// import the routes
const routes = require('./routes/posts');

// middleware
app.use('/', routes);




// app.use( express.static(path.join(__dirname, 'public')))

// app.get('/page', (req, res) => {

//     res.sendFile(path.join(__dirname + '/index.html'));
 
// })



//app listener
// const listenApp = app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// })



const dbURL = process.env.DB_CONNECTION;
//connect to the database
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection to database successful');
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
          })
    })
    .catch((err) => {
        console.log('Error connecting to database');
        console.log(err);
    })


