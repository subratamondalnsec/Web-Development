const express=require('express');

const router = express.Router();
const { createTodo }=require('../controllers/createTodo');
const { getTodo }=require('../controllers/getTodo');
const { getTodobyID }=require('../controllers/getTodobyID');
const { updateTodo }=require('../controllers/updateTodo');
const { DeleteTodo }=require('../controllers/DeleteTodo');




router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodo/:id",getTodobyID);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",DeleteTodo);
module.exports=router;
 