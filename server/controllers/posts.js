const mongoose = require("mongoose");
const PostMessage = require("../models/postMessage.js");

module.exports.getPosts = async (req, res) => {
 try {
  const posts = await PostMessage.find();
  res.status(200).json(posts)
 } catch (error) {
   console.log(error)
   res.status(404).json({message: error.message})
 }
};

module.exports.createPost = async (req, res) => {
  const body = req.body;
  console.log("Request body", body)
  const newPost = new PostMessage({...body, createAt: new Date().toISOString() });
  console.log(newPost)
  try {
    await new newPost.save();
    res.status(201).json(newPost)
  } catch (error) {
    console.log(error)
    res.status(409).json({message: error.message})
  }
};
module.exports.updatePost = async (req, res) => {
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
module.exports.deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that ID");

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted succesfully" });
};
module.exports.likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that ID");
  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};
