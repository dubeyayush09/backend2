import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express"
import connectDB  from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`Server is running at PORT : ${process.env.PORT}`);
    } )
})
.catch((err)=>{
    console.log("mongo db connection failed ",err);
})




















// const app=express()

// (async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)

//        app.on("error",(error)=>{
//         console.log("error",error)
//         throw error
//        })

//     }
//     catch(error){
//         console.log("error",error)
        
//     }

// })()