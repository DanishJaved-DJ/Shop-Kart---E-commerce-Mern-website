import dotenv from 'dotenv';
dotenv.config();

import app from './app.js'
import dataBaseConnect from './config/db.js';


const PORT=process.env.PORT || 8562;


dataBaseConnect().then(
    app.listen(PORT,()=>{
        console.log(`server is listening at http://localhost:${PORT}`);
        
    })
);
