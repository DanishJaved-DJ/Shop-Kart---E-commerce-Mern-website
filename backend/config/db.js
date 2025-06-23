import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoose_URL= process.env.mongoose_URL || 'mongodb+srv://danishjaved3191:4i0EVZizUXo0VqJe@cluster0.fynthx4.mongodb.net/'; 

const dataBaseConnect=async ()=>{
   await mongoose
    .connect(mongoose_URL)
    .then((conn)=>console.log(`connected to mongoDB: ${conn.connection.host}`))
    .catch((err)=>console.log(`Error connecting to MongoDB: ${err.message}`)
    );

}

export default dataBaseConnect;