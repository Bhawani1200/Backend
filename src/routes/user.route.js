import express  from "express";
import  {getUser ,createUser,deleteUser  } from "../controller/user.controller.js";
// import {createProducts,deleteProduct} from "../controller/product.controller.js";

const userRouter=express.Router();
userRouter.get("/",getUser);
userRouter.post("/",createUser);
// userRouter.post("/product",createProducts);
// userRouter.delete("/:id",deleteProduct);
userRouter.delete("/:id",deleteUser);
export default userRouter;

