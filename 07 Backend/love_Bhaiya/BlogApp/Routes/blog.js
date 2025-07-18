const express = require('express')
const router=express.Router();


const {likePost,unlikePost} = require("../Controllers/likeController");
const {createComment} = require("../Controllers/commentController");
const {createPost,getAllPosts} = require("../Controllers/postController");




router.post("/posts/create",createPost);
router.get("/posts",getAllPosts)
router.post("/comment/create",createComment)
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)

module.exports = router;


