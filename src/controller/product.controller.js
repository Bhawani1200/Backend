import { Product } from "../models/Product.js";
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
export default createProducts;