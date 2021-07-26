//require express
const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//get index route
router.get('/', (req, res) =>{
 //   res.sendFile(__dirname + '/index.html'); 
        res.send("live ...")
 })


//save post
router.post('/save', (req, res) =>{
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        description: req.body.description
    });
        
    post.save()
    .then(post => {
        // res.json(post);
        res.send(post);
    })
    .catch(err => {
        console.log(err);
    });
});

//get data from post
router.get('/:id', (req, res) =>{
    Post.findById(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).send(err), () => console.log(err));
});


router.get('/theposts', (req, res) => {
    res.send("posts ...")
})



 //module exports 
module.exports = router; 