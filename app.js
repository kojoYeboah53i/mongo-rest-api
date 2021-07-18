//require express
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//require mongoose
const mongoose = require('mongoose');


//get index route
app.get('/', (req, res) =>{
//   res.sendFile(__dirname + '/index.html');
    res.send("live ...")
})

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/test');


//app listener
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})


