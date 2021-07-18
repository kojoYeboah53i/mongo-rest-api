//require express
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//get index route
router.get('/', (req, res) =>{
 //   res.sendFile(__dirname + '/index.html'); 
        res.send("live ...")
 })
//post route
router.post('/', (req, res) =>{
    // console.log(req.body);
    const title = req.body.title;
    const description = req.body.description;
    Post.create(title, description)
        .then(post => res.status(200).json(post))
        .catch(err => res.status(500).send(err));
});

router.get('/theposts', (req, res) => {
    res.send("posts ...")
})



 //module exports 
module.exports = router;