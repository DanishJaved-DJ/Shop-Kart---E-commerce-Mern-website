import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoose_URL= process.env.MONGOOSE_URL; 

const dataBaseConnect=async ()=>{
   await mongoose
    .connect(mongoose_URL)
    .then((conn)=>console.log(`connected to mongoDB: ${conn.connection.host}`))
    .catch((err)=>console.log(err.message)
    )
    
}

export default dataBaseConnect;