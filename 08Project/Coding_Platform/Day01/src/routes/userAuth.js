const express = require('express');
const authRouter = express.Router();

const {register,login,logout,getProfile}=require("../controllers/userAuth")

//Register
authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.get('/getProfile',getProfile);

