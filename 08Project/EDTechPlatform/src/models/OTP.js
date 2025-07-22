const mongoose =require('mongoose');
const mailSender=require("../utils/mailSender");

const OTPShema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60,
    }
})

//a function -> to send email

async function sendVerificationEmail(email,otp){
    try{
        const mailResponse =await mailSender(email,"Verification Email from EdTech Platform",`OTP : <h2>${otp}</h2> <br/> Valid this otp 5min`)
    }
    catch(err){
        console.log("error occured while sending mails: ",err);
        throw err;
    }
}

OTPShema.pre("save",async function (next){
    await sendVerificationEmail(this.email,this.otp);
    next();
});


module.exports=mongoose.model("OTP",OTPShema);