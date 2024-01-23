import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

const app=express();
// configuration for environment files
dotenv.config();
const port =process.env.PORT || 3000;
app.use(express.json());
app.get("/api/user",userRouter);
app.get("/",(req,res)=>{
    res.status(200).send({Message:"Home Page"});
})
app.listen(port,(req,res)=>{
    console.log(`The server is being listend on ${port}`);
})