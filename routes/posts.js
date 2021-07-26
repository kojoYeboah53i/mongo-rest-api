//require express
const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//get index route
router.get('/posts',  async (req, res) =>{
 //   res.sendFile(__dirname + '/index.html'); 
      try {
        const posts = await Post.find({});
        res.json(posts);
      } catch(err){
        res.json({message: err});
    }
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
    })

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
router.get('/posts/:postId', async (req, res) =>{
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch(err){
        res.json({message: err});
    }
})

//delete post
router.delete('/posts/:postId', async (req, res) => {
    try {
   const removePost = await Post.remove({_id: req.params.postId})
   res.json(removePost);
   } catch(err){
       res.json({message: err});
   }

})



 //module exports 
module.exports = router; 