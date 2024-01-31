import mongoose from 'mongoose';
 const userSchema= new mongoose.Schema({
    name :
    {
        name:String,
        required:true
    },
    price:
    {
        type:Number,
        required:[true,'price must be provided']
    },
    featured:
    {
        type:Boolean,
        default:4.9
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
        enum:["Dell","apple","samsung","MI"]
    }
})
// creating collection and exporting
const User=mongoose.model('User',userSchema);
module.exports=User;