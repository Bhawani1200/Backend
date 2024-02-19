import express  from "express";
import  {getUser ,createUser,deleteUser, loginUser  } from "../controller/user.controller.js";
// import {createProducts,deleteProduct} from "../controller/product.controller.js";
import { authGuard } from '../middleware/jwt.js'
const userRouter=express.Router();
userRouter.get("/",authGuard,getUser);
userRouter.post("/",createUser);
userRouter.post("/login",loginUser);
// userRouter.post("/product",createProducts);
// userRouter.delete("/:id",deleteProduct);
userRouter.delete("/:id",deleteUser);
export default userRouter;

