const Category=require("../models/Category");
//create Category ka handler function 
exports.createCategory=async (req,res) => {
    try{
        //data fetch 
        const {name,description}=req.body;

        //validation 
        if(!name || !description){
            return res.status(400).json({
                success:false,
                message:"Please provide all fields"
            });
        }

        //create entry in database
        const CategoryDetails=await Category.create({
            name: name,
            description: description
        });
        console.log("Category created successfully:", CategoryDetails);


        return res.status(200).json({
            success:true,
            message:"Category created successfully",
        });
    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
}

//get all Categories ka handler function
exports.showAllCategory=async (req,res) => {
    try{
        const allcategories=await Category.find({},{
            name:true,
            description:true,
        });
        return res.status(200).json({
            success:true,
            message:"All categories fetched successfully",
            allcategories
        });
    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
}

