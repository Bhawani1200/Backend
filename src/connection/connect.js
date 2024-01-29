import mongoose from "mongoose";
import dotenv from 'dotenv';

// For environment variables
dotenv.config();
const connect = async()=>{
    try {
        // This is for establishment of connection
        const conn= await mongoose.connect(process.env.MONGO_URI);
       conn.connections.map((e)=>{
        console.log(`The database successfully connected in ${e.port}`);
       });
        
    } catch (error) {
     console.log(error)
    }
}
export default connect;