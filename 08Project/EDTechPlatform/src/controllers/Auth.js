const User=require('../models/User')
const OTP=require('../models/OTP')
const otpGenerator=require('otp-generator');
const validator = require('validator');
const bcrypt = require('bcrypt');
const profile = require('../models/Profile');
const {generateToken,handleAuthSuccess} = require('../utils/tokenGenerator');

// Helper function for email and password validation
function validateEmailAndPassword(email, password, res) {
    if (!validator.isEmail(email)) {
        res.status(403).json({
            success: false,
            message: "Invalid Email",
        });
        return false;
    }
    if (!validator.isStrongPassword(password)) {
        res.status(403).json({
            success: false,
            message: "Weak Password",
        });
        return false;
    }
    return true;
}

//send otp
exports.sendOTP= async (req,res)=>{
    try{
        //fetch email from request body
        const {email}=req.body;

        //check if user already exist
        const checkUserPresent= await User.findOne({ email});
        //if user already exist , then return res
        if(checkUserPresent) {
            return res.status(401).json({
                success:false,
                message: "User already registered"
            });
        }
        //otp Generator
        var otp = otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        })
        console.log(otp);
        //check unique otp or not
        let result= await OTP.findOne({otp:otp});
        while(result){
            otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            });
            console.log(otp);
            //check unique otp or not
            result= await OTP.findOne({otp:otp});
        }
        const otpBody=await OTP.create({email,otp});

        console.log(otpBody);

        //return response successful
        res.status(200).json({
            success:true,
            message:"Otp Sent Successfully",
            otp,
        })

    }catch(err){
        console.error(err);
        
        res.status(500).json({
            success:false,
            message: err.message,
        })
    }
    
}

//signup
exports.signUp=async (req,res)=>{
    try{
        //data fetch from request ki body

        const {firstName,lastName,email,password,confirmPassword,accountType,contactNumber,otp}=req.body;

        //validate
        if(!firstName || !lastName || !email || !password || !confirmPassword || !otp){
            return res.status(403).json({
                success:false,
                message: "All field are required",
            });
        }
        if (!validateEmailAndPassword(email, password, res)) {
            return;
        }
        if(password !== confirmPassword){
            return res.status(403).json({
                success:false,
                message: "Password and Confirm Password do not match",
            });
        }
        //check if user already exist
        const checkUserPresent= await User.findOne({ email });
        if(checkUserPresent) {
            return res.status(400).json({
                success:false,
                message: "User already registered",
            })
        }
        //find most recent OTP for the email
        const recentOtp = await OTP.findOne({ email }).sort({ createdAt: -1 }).limit(1);
        if(!recentOtp || recentOtp.otp !== otp) {
            return res.status(400).json({
                success:false,
                message: "Invalid or expired OTP",
            });
        }
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const profileDetails = await profile.create({
            gender:null,
            dateOfBirth:null,
            about:null,
            contactNumber:null
        });
        //create user
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            accountType,
            additionalDetaills: profileDetails._id,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        });

        // token generation, user object transformation, and response
        handleAuthSuccess(user, res, "User registered successfully");
    } catch(err){
        console.error(err);
        
        return res.status(500).json({
            success:false,
            message: err.message,
        })
    }
}


//login

exports.login=async (req,res)=>{
    try{ 
        const {email,password}=req.body;
        //validate
        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All field are required",
            });
        }
        if (!validateEmailAndPassword(email, password, res)) {
            return;
        }
        //check if user exist
        const user = await User.findOne({ email }).populate("additionalDetaills");  
        if(!user) {
            return res.status(400).json({
                success:false,
                message: "User not registered, please sign up",
            })
        }
        //check password
        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch) {
            // token generation, user object transformation, and response
            return handleAuthSuccess(user, res, "User logged in successfully");
        } else {
            return res.status(400).json({
                success:false,
                message: "Invalid email or password",
            });
        }

    }
    catch(err){
        console.error(err);
        
        return res.status(500).json({
            success:false,
            message: err.message,
        })
    }

}


//changePassword




