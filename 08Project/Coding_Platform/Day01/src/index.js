const express=require("express");
require('dotenv').config();
const {dbconnect}=require("./config/mongodb");
const cookieParser = require('cookie-parser')


const app=express();
app.use(express.json());
app.use(cookieParser());

const InitlizeConnection = async()=>{

    try{
        await dbconnect();
        console.log("connected to MongoDB");
        // cloudinary.cloudinaryConnect();
        //  console.log("connected to Cloudinary");
        app.listen(PORT, ()=>{
            console.log(`Listening at port ${PORT} `);
        })
    }
    catch(err){
        console.log("Error "+err);
    }
}

InitlizeConnection();
