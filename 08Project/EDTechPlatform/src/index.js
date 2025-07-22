const express = require("express")
const dbconnect =require("./config/database")
require("dotenv").config()



const app = express();
app.use(express.json());




const InitlizeConnection = async()=>{

    try{
        await dbconnect();
        console.log("connected to MongoDB");
        // cloudinary.cloudinaryConnect();
        //  console.log("connected to Cloudinary");
        app.listen(process.env.PORT, ()=>{
            console.log(`Listening at port ${process.env.PORT} `);
        })
    }
    catch(err){
        console.log("Error "+err);
    }
}

InitlizeConnection();
