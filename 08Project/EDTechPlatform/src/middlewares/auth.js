const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');


 //auth
exports.auth=async(req,res,next)=>{

    try{
        //extract token
        const token=req.cookies.token||req.body.token || req.headers("Authorization").replace("Bearer ","");
        if(!token){
            return res.status(401).json({
                success:false,
                message: "Please login first",
            });
        }
        //verify token
        try{
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            console.log(decoded);
            req.user=decoded
            
        }
        catch(err){
            return res.status(401).json({
                success:false,
                message: "Invalid token",
            });
        }
        next(); 
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message: "Something went wrong: "+err.message,
        });
    }
}


//is Student
exports.isStudent=async(req,res,next)=>{
    try{
        if(req.user.accountType!=="Student"){
            return res.status(401).json({
                success:false,
                message: "Access denied , you are not a student",
            });
        }
        next();
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message: "User role cannot be verified,please try again later",
        });
    }
}

//is instructor
exports.isInstructor=async(req,res,next)=>{
    try{
        if(req.user.accountType!=="Instructor"){
            return res.status(401).json({
                success:false,
                message: "Access denied , you are not an instructor",
            });
        }
        next();
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message: "User role cannot be verified,please try again later",
        });
    }
}

//isAdmin

exports.isAdmin=async(req,res,next)=>{
    try{
        if(req.user.accountType!=="Admin"){
            return res.status(401).json({
                success:false,
                message: "Access denied , you are not an admin",
            });
        }
        next();
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message: "User role cannot be verified,please try again later",
        });
    }
}





