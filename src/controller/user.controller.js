import { User } from "../models/User.js";
import { Product } from "../models/Product.js";
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
  const newProduct =new Product(req.body)
  try {
    const Product =await newProduct.save();
    res.status(200).send({Product})
  } catch (error) {
    res.status(400).send({Product,error})
   console.log(error)
  }
}


export {getUser,createUser,deleteUser,createProducts}