const mongoose = require('mongoose')
const {Schema}=mongoose;


const userSchema = new Schema({
    firstName:{
        type:String,
        required : true,
        minLength:2,
        maxLength:20,
    },
    lastName:{
        type:String,
        required : true,
        minLength:2,
        maxLength:20,
    },
    email:{
        type:String,
        required : true,
        unique:true,
        trim:true,
        lowercase:true,
        immutable:true,
    },
    age:{
        type:Number,
        min:4,
        max:120,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default : 'user'
    },
    gender: {
		type: String,
        enum:['male','female','other'],
	},
    problemSolved:{
        type:[string]
    }
},{timestamps:true})


const User = mongoose.model("User",userSchema);
module.exports=User;
