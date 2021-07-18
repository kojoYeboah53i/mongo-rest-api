//require express
const express = require('express');
const router = express.Router();

//get index route
app.get('/', (req, res) =>{
 //   res.sendFile(__dirname + '/index.html');
        res.send("live ...")
 })

app.get('/posts', (req, res) => {
    res.send("posts ...")
})



 //module exports 
module.exports = router;