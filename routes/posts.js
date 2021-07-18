//require express
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//get index route
router.get('/', (req, res) =>{
 //   res.sendFile(__dirname + '/index.html'); 
        res.send("live ...")
 })


//save post
router.post('/save', (req, res) =>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description});
        
    post.save()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).send(err), () => console.log(err));
});




router.get('/theposts', (req, res) => {
    res.send("posts ...")
})



 //module exports 
module.exports = router; 