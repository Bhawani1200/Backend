import mongoose from "mongoose";
// creating tables in databases
const userSchema=mongoose.Schema(
    {
        name:
        {
            type:String,
            minlength: [3,'name is too short'],
            maxlength :[16,'name too long'],
            required:[true, 'enter your Name'],
            trim:true
        },
        email:
        {
            type :String,
            required:[true,'Please enter your email:'],
            unique :[true,'email already exists'],
            trim:true
        },
        password:
        {
            type:String,
            required:[true,'please enter your password'],
            trim: true
        },
        role:{
            type:String
        },
    },{ timestamps :true}
)
 export const User=mongoose.model('User',userSchema);