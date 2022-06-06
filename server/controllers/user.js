import User from "../models/user.js";
import bcrypt from "bcryptjs"
import  jwt from "jsonwebtoken";

//Constants
const secret = "bigsecret"
const SALT_ROUNDS = 10

export const login = async (req, res) =>{
const {email, password} = req.body
try {
  const existingUser = await User.findOne({email})
if(!existingUser)
  return res.status(404).json({message: "You have not registered"})

// Compare password
const isPasswordCorrect = await bcrypt.compare( password,existingUser.password)
if (isPasswordCorrect){
  const token = jwt.sign({email: existingUser.email, id: existingUser._id}, secret, {expiresIn: "1h"})
  res.status(200).json({result: existingUser, token})
  return
}
return res.status(400).json({message: 'Incorrect password'})
// Show result 
} catch (error) {
  res.status(500).json({message: "Something went wrong"})
  console.log("[LOGIN ERROR] ", error)
}

}

export const createUser = async (req, res) =>{
  const {email, password, firstName , lastName} = req.body;
  const existingUser = await User.findOne({email});
  
  if (existingUser)
  return res.status(400).json({message: "User already exists"})
  
  // Creating new user

const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
const result = await User.create({ email, password: hashedPassword, username: `${firstName} ${lastName}` });

const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
  try {
    res.status(201).json({result, token});
  } catch (error) {
    res.status(500).json({message: "Oops!!! Something went wrong"});
    console.log(error)
  }
}

