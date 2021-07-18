//require express
const express = require('express');
const router = express.Router();
const posts = require('../models/Post');

//get index route
router.get('/', (req, res) =>{
 //   res.sendFile(__dirname + '/index.html');
        res.send("live ...")
 })

router.get('/theposts', (req, res) => {
    res.send("posts ...")
})



 //module exports 
module.exports = router;