const express = require("express");
require('dotenv').config()
const dbconnect = require("./Config/database")
const blog = require("./Routes/blog")
const app = express();

app.use(express.json())


app.use("/api/v1/", blog );





const InitlizeConnection = async()=>{

    try{
        await dbconnect();
        console.log("connected to MongoDB");

        app.listen(process.env.PORT, ()=>{
            console.log(`Listening at port ${process.env.PORT} `);
        })
    }
    catch(err){
        console.log("Error "+err);
    }
}

InitlizeConnection();

