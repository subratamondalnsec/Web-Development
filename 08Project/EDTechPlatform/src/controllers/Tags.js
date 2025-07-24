const Tag=require("../models/Tags");
//create Tag ka handler function 
exports.createtags=async (req,res) => {
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
        const tagDetails=await Tag.create({
            name: name,
            description: description
        });
        console.log("Tag created successfully:", tagDetails);


        return res.status(200).json({
            success:true,
            message:"Tag created successfully",
        });
    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
}

//get all tags ka handler function
exports.showAllTags=async (req,res) => {
    try{
        const alltags=await Tag.find({},{
            name:true,
            description:true,
        });
        return res.status(200).json({
            success:true,
            message:"All tags fetched successfully",
            alltags
        });
    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
}

