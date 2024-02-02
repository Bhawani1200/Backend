import mongoose from 'mongoose';
 const productSchema= new mongoose.Schema({
    name :
    {
        type:String,
       
    },
    price:
    {
        type:Number,
        required:[true,'price must be provided']
    },
    featured:
    {
        type:Boolean,
        default:true
    },
    rating:
    {
        type:Number,
        default:4.9
    },
    createdAt:
    {
        type:Date,
        default:Date.now()
    },
    company:
    {
        type:String,
       
    }
})
// creating collection and exporting
export const Product=mongoose.model('Product',productSchema);
// module.exports=Product;