import mongoose from "mongoose";

const mongoose_URL="mongodb://localhost:27017" || porcess.env.MONGO_URI ; 

const dataBaseConnect=async ()=>{
   await mongoose
    .connect(mongoose_URL)
    .then((conn)=>console.log(`connected to mongoDB: ${conn.connection.host}`))
    .catch((err)=>console.log(err.message)
    )
    
}

export default dataBaseConnect;