import express from 'express';
import {createProducts,deleteProduct} from "../controller/product.controller.js";

const productRouter =express.Router();
productRouter.post("/product",createProducts);
productRouter.delete("/:id",deleteProduct);
export default productRouter;