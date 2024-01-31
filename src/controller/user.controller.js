import { User } from "../models/user.products.js";
import  { products }  from '../models/user.products.js';

const getUser=(req,res)=>{
    res.send({Message:"Getting users request"});
}
const createUser = async(req,res)=>{
    console.log(req.body);
    const { name,email,password } =req.body;
    const user=new User({
        name,
        email,
        password
    })
    try {
        const users=await user.save();
        res.send({data :users})
    } catch (error) {
        console.log(error)
    }
}
const deleteUser = async (req,res)=>{
const id=req.params.id;
try {
    
    const user =await User.findByIdAndDelete(id);
    res.send({data :user});
} catch (error) {
    console.log(error);
}
}
const createProducts = async (req,res)=>{
    console.log(req.body);
  const {name,price,featured,rating,createdAt,company}=req.body;
  const user =new User({
    name,
    price,
    featured,
    rating,
    createdAt,
    company,
  })
  try {
    const users =await user.save();
    res.send({data:users})
  } catch (error) {
    console.log(error);
  }
}


export {getUser,createUser,deleteUser,createProducts}