const { response } = require('express');
const Todo=require('../models/Todo')



exports.createTodo = async (req,res,next) => {
    try{
        
        const {title,description} = req.body;

        const response= await Todo.create({title,description});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Creted Successfully'
                
            }
        );
    }
    catch(e){
        console.error(e);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: e.message,
        });
    }
}