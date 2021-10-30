/************************************
 *  ok note this comment
 *  for some weird reason i have to prefix the url with posts
 *  before the request works, I don't know why yet 
 *  the initial get request must begin with some word perhaps "api"
 *  in this case it is posts, but once u set the first get request with 
 *  the specific word, all other requests must begin with the same word 
 * 
 * *******************************/

//require express
const express = require('express');
const router = express.Router();
const Post = require('../models/post');



//get index route
router.get('/posts',  async (req, res) =>{
      try {
        const posts = await Post.find({});
        res.json(posts);
      } catch(err){
        res.json({message: err});
    }
 })


 //saved post async
 router.post('/async', async (req, res) =>{

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

//update post
router.patch('/posts/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            {_id: req.params.postId}, 
            {$set: { title: req.body.title}}
            )
        
            res.json(updatePost) 
    } catch(err){
        res.json({message: err});
    }
})  


 //module exports 
module.exports = router; 