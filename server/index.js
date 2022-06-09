import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';
import User from './models/user.js'
const app = express();
app.use(express.json({limit: "30mb", extended:true}));
app.use(express.urlencoded({limit: "30mb", extended:true}))
app.use(cors());

app.use('/posts',postRoutes);
app.use('/user',userRoutes);

// const CONNECTION_URL = "mongodb+srv://admin:admin@webappproject.p2q1m.mongodb.net/WebAppDB?retryWrites=true&w=majority";
const CONNECTION_URL = "mongodb+srv://admin:admin1@cluster0.fm9jr.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;
await mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology : true})
.then(()=>{ app.listen(PORT, ()=>{
  console.log(`Connected to database and running on ${PORT}`);
}) })
.catch((error)=>{
  console.log(error.message);
})

