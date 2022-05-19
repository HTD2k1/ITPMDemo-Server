const user = require("../models/user.js");

module.exports.getUsers = async (req, res) =>{
  try {
    const users = await user.find();

    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

module.exports.createUser = async (req, res) =>{
  const u = req.body;
  const newUser = new user(u);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
}