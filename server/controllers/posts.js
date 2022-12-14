import express from 'express';
import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
const router = express.Router();
export const getPosts = async (req, res) => {
  const {page} = req.query
 try {
   const LIMIT = 8
   const startIndex = (Number(page) - 1) * LIMIT
   const total = await PostMessage.countDocuments({})
  // const total = 10
  const posts = await PostMessage.find().sort({_id: -1}).limit(LIMIT).skip(startIndex)
  
  res.status(200).json({data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total/LIMIT) })
 } catch (error) {
   console.log(error)
   res.status(404).json({message: error.message})
 }
};

export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
      const title = new RegExp(searchQuery, "i");

      const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});

      res.json({ data: posts });
  } catch (error) {    
      res.status(404).json({ message: error.message });
  }
}


export const getPostsByCreator = async (req, res) => {
  const { name } = req.query;

  try {
      const posts = await PostMessage.find({ name });

      res.json({ data: posts });
  } catch (error) {    
      res.status(404).json({ message: error.message });
  }
}

export const createPost = async (req, res) => {
  const post = req.body;

  const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

  try {
      await newPostMessage.save();

      res.status(201).json(newPostMessage);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that ID");
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(updatedPost);
};
export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that ID");

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted succesfully" });
};
export const likePost = async (req, res) => {
  const { id } = req.params;
  if(!req.userId){
    console.log("UNAUTHENTICATED",req.headers)
    return res.json({message: "Unauthenticated"})
  }
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with ID: ${id}`);
  const post = await PostMessage.findById(id);
  const indexFound =  post.likedUsers.findIndex(id => id === String(req.userId))
  if (indexFound === -1){
    post.likedUsers.push(req.userId)
  }
  else{
    post.likedUsers = post.likedUsers.filter(id => id !== String(req.userId))
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    post,
    {
      new: true,
    }
  );
  res.status(200).json(updatedPost);
};
export const getPost = async (req, res) => { 
  const { id } = req.params;

  try {
      const post = await PostMessage.findById(id);
      
      res.status(200).json(post);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}
export const commentPost = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  const post = await PostMessage.findById(id);

  post.comments.push(value);

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

  res.json(updatedPost);
};

export default router;