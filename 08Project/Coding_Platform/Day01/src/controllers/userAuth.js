const User = require("../models/user")
const validate = require('../utils/validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


register = async (req,res) => {
    try{
        //validate
        validate(req.body);
        //
        req.body.password = await bcrypt.hash(password,10);
        const user = await User.create(req.body);
        const payload = {
            email : user.email,
            id:user._id,
            role:user.role,
        }
       const token =  jwt.sign(payload,process.env.JWT_SECRET,{ expiresIn: "24h" });
       res.cookies('token',token,{maxAge:24 * 60 * 60 * 1000});
       res.status(201).send("user Register Successfully");
    }
    catch(error){
        res.status(400).send("Error "+error);
    }
}

const login = async (req,res) => {
    try{
        const {email,password} =req.body;
        if(!email || !password) {
            throw new Error ("Invalid Credentials");
        }
        const user = await User.findOne({email});
        if(!user)  throw new Error ("User not exist, please register first");
        if(!bcrypt.compare(password,user.password)){
            throw new Error ("Invalid Credentials");
        }
        
        const payload = {
            email : user.email,
            id:user._id,
            role:user.role,
        }
        const token =  jwt.sign(payload,process.env.JWT_SECRET,{ expiresIn: "24h" });
        res.cookies('token',token,{maxAge:24 * 60 * 60 * 1000});
        res.status(201).send("user logged Successfully");
    }
    catch(error){
        res.status(400).send("Error "+error);
    }
}

const logout = async (req,res) => {
    try{
    }
    catch(error){
        res.status(400).send("Error "+error);
    }
}
const getProfile = async (req,res) => {
    try{

    }
    catch(error){
        res.status(400).send("Error "+error);
    }
}

module.exports={register,login,logout,getProfile};