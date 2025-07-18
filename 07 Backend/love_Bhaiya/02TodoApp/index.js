const express = require("express");
require('dotenv').config()
const dbconnect = require("./Config/database")
const app = express();
const TodoRoutes= require('./routes/todos');


app.use(express.json())


app.use("/api/v1", TodoRoutes);


app.get("/",(req,res)=>{
    res.send("This is HomeBody");
})






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

