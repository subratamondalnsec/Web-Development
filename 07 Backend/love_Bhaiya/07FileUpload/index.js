const express = require("express")
const dbconnect =require("./config/database")
const cloudinary =require("./config/cloudinary")
require("dotenv").config()
const fileupload=require("express-fileupload")
const Upload = require("./Routes/FileUpload");


const app = express();
app.use(express.json());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use("/api/v1",Upload);

const InitlizeConnection = async()=>{

    try{
        await dbconnect();
        console.log("connected to MongoDB");
        cloudinary.cloudinaryConnect();
         console.log("connected to Cloudinary");
        app.listen(process.env.PORT, ()=>{
            console.log(`Listening at port ${process.env.PORT} `);
        })
    }
    catch(err){
        console.log("Error "+err);
    }
}

InitlizeConnection();
