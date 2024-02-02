import express  from "express";
import  {getUser ,createUser,deleteUser, createProducts,  } from "../controller/user.controller.js";
const userRouter=express.Router();
userRouter.get("/",getUser);
userRouter.post("/",createUser);
userRouter.post("/product",createProducts);
userRouter.delete("/:id",deleteUser);

export default userRouter;

