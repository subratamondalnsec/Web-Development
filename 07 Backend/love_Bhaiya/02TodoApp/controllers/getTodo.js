const { response } = require('express');
const Todo=require('../models/Todo')



exports.getTodo = async (req,res,next) => {
    try{
        const todos=await Todo.find({});
        
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:'All Todes data fetch '
                
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