const express = require('express');
const router = express.Router();
const {login, signup}=require("../Controllers/Auth")
const {auth,isStudent,isAdmin}=require("../Middleware/auth")


router.post("/login",login);
router.post("/signup",signup);

router.get("/test",auth,(req,res)=>{
    res.json({
        success: true,
        message: "Test successful"
    })
})


router.get("/student",auth,isStudent, (req,res)=>{
     res.json({
        success: true,
        message: "Welcome to Protected Route for Student"
    })
})

router.get("/admin",auth,isAdmin, (req,res)=>{
     res.json({
        success: true,
        message: "Welcome to Protected Route for Admin"
    })
})


module.exports=router;