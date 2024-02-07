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
const deleteProduct = async (req,res)=>{
  const id=req.params.id;
  try {
    const newProduct =await Product.findByIdAndDelete(id);
    res.send({data:newProduct})
  } catch (error) {
    
  }
}
// const deleteProduct = async (req,res)=>{
//   try {
//     const deleteProduct =await Product.findByIdAndDelete(req.params.id)
//     res.status(200).json(
//       {
//         status:"Successfully deleted",
        
//       }
//     )
//   } catch (error) {
//     res.status(404).json({
//       status:"Failed deletion"
//     })
//   }
// }

export { createProducts,deleteProduct};