import express  from "express";
import  {getUser, createUser ,deleteUser} from "../controller/user.controller.js";
const userRouter=express.Router();
userRouter.get("/",getUser);
userRouter.post("/",createUser);
userRouter.delete("/:id",deleteUser);

export default userRouter;

