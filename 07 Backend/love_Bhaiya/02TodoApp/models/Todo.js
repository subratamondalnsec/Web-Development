const mongoose =require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
    title:{
        type:String,
        required:true,
        maxLength:50,
    },
    description:{
        type:String,
        required:true,
        maxLength:100,
    },
    createdAt:{
        type : Date,
        required:true,
        default: Date.now

    },
    updatedAt:{
        type : Date,
        required:true,
        default: Date.now

    }
    
}
//,{ timestamps: true }
)

const Todo = mongoose.model("Todo",TodoSchema);

module.exports = Todo;
