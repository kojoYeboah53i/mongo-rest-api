//require express
const express = require('express');
const app = express();
const port = process.env.PORT || 7000;
const { MongoClient }  = require('mongodb');
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

//connect to mongodb
const uri = process.env.DB_CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  // const collection = client.db("test").collection("devices");
  console.log('Connected successfully to database');

  // perform actions on the collection object
 // client.close();
});


app.use( express.static(path.join(__dirname, 'public')))

app.get('/page', (req, res) => {

    res.sendFile(path.join(__dirname + '/index.html'));
 
})



//app listener
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})


