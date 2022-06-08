import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
import jwt from "jsonwebtoken";
export const getPosts = async (req, res) => {
 try {
  const posts = await PostMessage.find();
  res.status(200).json(posts)
 } catch (error) {
   console.log(error)
   res.status(404).json({message: error.message})
 }
};

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
