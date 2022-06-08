import express from 'express';
const router = express.Router();
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
import auth from "../middleware/auth.js"

// PostMessage 
router.get('/',auth, getPosts);
router.post('/',auth, createPost)
router.patch('/:id',auth,updatePost);
router.patch('/:id/likePost',auth,likePost);
router.delete('/:id',deletePost);

export default router;