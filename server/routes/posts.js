//import express from 'express';
const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts.js');

router.get('/', postController.getPosts);
router.post('/',postController.createPost)
// router.patch('/:id',updatePost);
// router.patch('/:id/likePost',likePost);
// router.delete('/:id',deletePost);

module.exports = router;  