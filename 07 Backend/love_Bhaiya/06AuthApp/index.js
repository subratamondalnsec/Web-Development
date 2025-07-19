const express = require("express")
const dbconnect =require("./Config/database")
require("dotenv").config()
const cookieParser = require('cookie-parser');
const user =require("./Routes/user")

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1",user);

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
