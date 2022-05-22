import express from 'express';
const router = express.Router();
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
router.get('/', getPosts);
router.post('/',createPost)
router.patch('/:id',updatePost);
router.patch('/:id/likePost',likePost);
router.delete('/:id',deletePost);

export default router;