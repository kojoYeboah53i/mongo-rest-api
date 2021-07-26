//require express
const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//get index route
router.get('/',  async (req, res) =>{
 //   res.sendFile(__dirname + '/index.html'); 
        res.send("live ...")
 })

 //async post route


 //saved post async
 router.post('/async', async (req, res) =>{
    //  let post = new Post();
    //  post.title = req.body.title;
    //  post.content = req.body.content;
    //  post.description = req.body.description;
    const post = new Post({
                title: req.body.title,
                content: req.body.content,
                description: req.body.description
            });

     try{
        const savedPost = await post.save();
         res.json(savedPost);
     } catch(err){
         res.json({message: err});
     }

 });

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