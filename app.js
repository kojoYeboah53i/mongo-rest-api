//require express
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//require mongoose
const { MongoClient }  = require('mongodb');


//get index route
app.get('/', (req, res) =>{
//   res.sendFile(__dirname + '/index.html');
    res.send("live ...")
})

//connect to mongodb
// mongoose.connect('mongodb://localhost:27017/test');
const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('Connected successfully to database');

  // perform actions on the collection object
  client.close();
});


//app listener
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})


