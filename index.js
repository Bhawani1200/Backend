import express from 'express';
import dotenv from 'dotenv';
import userRouter from './src/routes/user.route.js';
import connect from './src/connection/connect.js'
dotenv.config();
const app=express();
// configuration for environment files
const port = process.env.PORT||3000;
// const port =8000;
app.use(express.json());

// for MONGODB connection
connect();
app.use("/api/user",userRouter);
app.get("/",(req,res)=>{
    res.status(200).send({Message:"Home Page"});
})
app.listen(port,(req,res)=>{
    console.log(`The server is being listened on ${port}`);
})
