const Course= require('../models/Course');
const User = require('../models/User');
const Category = require('../models/Category');
const {uploadFiles}=require('../utils/FileUploader');


//create course handler function
exports.createCourse = async (req, res) => {
    try{
        const { courseName, courseDescription, whatYouWillLearn, price, category } = req.body;
        const thumbnail = req.files.thumbnail;
        //validation
        if (!courseName || !courseDescription || !whatYouWillLearn || !price || !category || !thumbnail) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            });
        }
        //Instruction should be the logged in user
        const instructionID = req.user.id; // Extract user ID from the request
        const instructorDetails = await User.findById(instructionID);
        if (!instructorDetails) {
            return res.status(404).json({
                success: false,
                message: "Instructor not found"
            });
        }
        //category validation
        const categoryDetails = await Category.findById(category);
        if (!categoryDetails) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }
        //upload thumbnail
        const thumbnailUrl = await uploadFiles(thumbnail,process.env.CLOUDINARY_COURSE_FOLDER,90);
        if (!thumbnailUrl || !thumbnailUrl.secure_url) {
            return res.status(500).json({
                success: false,
                message: "Thumbnail upload failed"
            });
        }
        //create course entry database
        const newCourse = await Course.create({
            courseName,
            courseDescription,
            whatYouWillLearn,
            instruction: instructionID,
            price,
            thumbnail: thumbnailUrl.secure_url,
            category: categoryDetails._id,
        });
        //add course to instructor's courses
        User.findByIdAndUpdate(
            instructionID,
            { $push: { courses: newCourse._id } },
            { new: true }
        );
        //category update
        Category.findByIdAndUpdate(
            categoryDetails._id,
            { $push: { courses: newCourse._id } },
            { new: true }
        );
        return res.status(201).json({
            success: true,
            message: "Course created successfully",
            data: newCourse
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

//get all courses handler function
exports.showAllCourses = async (req, res) => {
    try {
        const allCourses = await Course.find({},{
            courseName: true,
            courseDescription: true,
            whatYouWillLearn: true,
            price: true,
            thumbnail: true,
            category: true,
            instruction: true
        }).populate('instruction').exec();
            
        return res.status(200).json({
            success: true,
            message: "All courses fetched successfully",
            data: allCourses
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}