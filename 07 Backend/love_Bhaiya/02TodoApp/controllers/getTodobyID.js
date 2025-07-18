const { response } = require('express');
const Todo=require('../models/Todo')



exports.getTodobyID = async (req,res,next) => {
    try{
        const id=req.params.id;
        const todo=await Todo.findById({_id: id});
        if(!todo){
            return res.status(404).json({
                success : false,
                message:"No Data Found With Given Id",
            })
        }
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:'Tode data fetch'
                
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