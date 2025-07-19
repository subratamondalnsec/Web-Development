const bcrypt=require("bcrypt");
const User=require("../Model/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.signup=async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({
            succes:false,
            message:'User already Exist',
        });
        let hashpassword;
        try{
            hashpassword=await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(500).json({
                succes:false,
                message:'Error in Hashing Password '+err,
            });
        }
        const user = await User.create({
            name,email,password:hashpassword,role
        })
        return res.status(200 ).json({
            succes:true,
            message:'Succesful Created Account ',
        });
    }
    catch(err){
        return res.status(500 ).json({
            succes:false,
            message:'user cannot registed ,please try again',
        });
    }
}

exports.login=async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message : "Please fill all the details carefully",
            });
        }
        let user = await User.findOne({email});
        if(!user){
             return res.status(401).json({
                success : false,
                message : "User does not exist",
            });
        }
        const payload = {
            email : user.email,
            id : user._id,
            role : user.role,
        };
        if(await bcrypt.compare(password,user.password)){

            const token = await jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            });
            user=user.toObject();
            user.token=token;
            user.password=undefined;

            const options = {
                expires : new Date(Date.now() + 2 * 60 * 60 * 1000),
                httpOnly : true,
            }
            res.cookie("token",token,options).status(200).json({
                success : true,
                token,
                user,
                message:"User logged in successfully"
            });
        }
        else{
             return res.status(403).json({
                success : false,
                message : "Password does not match",
            })
        }
    }
    catch(err){
        console.error(err)
        return res.status(500).json({
            success : false,
            message : "Login false" 
        })
    }

}


