const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        minLength:2,
        maxLength:20,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        minLength:1,
        maxLength:20,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,   
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
        type:true,
        enum:["Admin","Student","Instructor"],
        required:true,
    },
    additionalDetaills:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile",
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course",
        }
    ],
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },
    image:{
        type:String,
        ref:true,
    },
    courseProgress:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress",
        }
    ],
});


module.exports =mongoose.model("User",userSchema);
