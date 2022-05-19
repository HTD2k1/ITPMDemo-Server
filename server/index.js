// import express from 'express';

// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';

const  postRoutes = require('./routes/posts.js');
const userRoutes = require('./routes/user.js');
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// const app = express('/posts', postRoutes);

app.use(bodyParser.json( {extended:false}));
app.use(bodyParser.urlencoded( {extended:false}));
app.use(cors());

// app.use('/posts',postRoutes);
app.use('/user',userRoutes);
// create application/json parser
var jsonParser = bodyParser.json()
app.get('/posts', jsonParser, function (req, res) {
  // create user in req.body
  console.log("request",req.body)
})
// const CONNECTION_URL = "mongodb+srv://admin:admin@webappproject.p2q1m.mongodb.net/WebAppDB?retryWrites=true&w=majority";
//Dat database 
const CONNECTION_URL = "mongodb+srv://admin:admin1@cluster0.fm9jr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology : true})
.then(()=>{ app.listen(PORT, ()=>{
  console.log(`Connected to database and running on ${PORT}`);
}) })
.catch((error)=>{ 
  console.log(error.message);
})