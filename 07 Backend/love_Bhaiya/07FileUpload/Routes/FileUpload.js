const express =require("express");
const router = express.Router();
const {imageUpload,videoUpload,imageReducer,localFileUpload}=require("../controllers/fileUpload");


router.post("/ImageUpload",imageUpload);
router.post("/videoUpload",videoUpload);
router.post("/imageReducer",imageReducer);
router.post("/localFileUpload",localFileUpload);


module.exports=router;