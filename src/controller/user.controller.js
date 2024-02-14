import  { generateHashPassword,jwtLogin } from "../middleware/jwt.js";
import { User } from "../models/User.js";
import jwt from 'jsonwebtoken'
const getUser=(req,res)=>{
    res.send({Message:"Getting users request"});
}
const createUser = async(req,res)=>{
    console.log(req.body);
    const { name,email,password } =req.body;
    const hashPassword=await generateHashPassword(password);
    const user=new User({
        name,
        email,
        password:hashPassword
    })
    try {
    
        const users=await user.save();
        const token= await jwtLogin(users);
        console.log(token);
        res.send({data :users,token:token})
    } catch (error) {
        console.log(error)
    }
}
const loginUser =async (req,res)=>{
    const user= await User.find({email:req.body.email});
    if(!user)
    {
        res.status(400).send({message:"Invalid user"});
    }
    const token = req.headers.authorization.split(" ")[0];
    console.log(token);
    var decoded=await jwt.verify(token,process.env.SECRET);
    console.log(decoded);
    res.send({decoded:decoded})
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

export {getUser,createUser,deleteUser,loginUser}