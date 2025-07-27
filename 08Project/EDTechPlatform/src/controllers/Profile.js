const Profile =require('../models/Profile'); 
const User = require('../models/User');
const Course = require('../models/Course');

//update profile

exports.updateProfile = async (req, res) => {
    try {
        //get data
        const {gender, dateOfBirth="", about="", contactNumber} = req.body;
        //get userId from request
        const userId = req.user._id;
        //validation
        if(!contactNumber || !gender || !userId) {
            return res.status(400).json({
                success: false,
                message: "These fields are required",
            });
        }
        //find user
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        const profileAdditionalID = user.additionalDetails;
        const additionalDetails = await Profile.findById(profileAdditionalID);

        //update profile
        additionalDetails.gender = gender;
        additionalDetails.dateOfBirth = dateOfBirth;
        additionalDetails.about = about;
        additionalDetails.contactNumber = contactNumber;

        await additionalDetails.save();

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: additionalDetails
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

//delete profile

exports.deleteProfile = async (req, res) => {
    try {
        //get userId from request
        const userId = req.user._id;
        //validation
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User ID is required"
            });
        }
        //find user
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        // Unenroll user from all courses
        const userCourses = user.courses;
        
        // Remove user from all enrolled courses' studentsEnrolled array
        for (const courseId of userCourses) {
            await Course.findByIdAndUpdate(courseId, {
                $pull: { studentsEnrolled: userId }
            });
        }
        
        // Clear user's courses array
        await User.findByIdAndUpdate(userId, { 
            $set: { courses: [] },
            $unset: { courseProgress: 1 }
        });

        // Delete profile additional details
        const profileAdditionalID = user.additionalDetails;
        await Profile.findByIdAndDelete(profileAdditionalID);
        //delete user
        await User.findByIdAndDelete(userId);

        return res.status(200).json({
            success: true,
            message: "Profile has been deleted successfully. User unenrolled from all courses.",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

//get profile
exports.getProfile = async (req, res) => {
    try {
        //get userId from request
        const userId = req.user._id;
        //validation
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User ID is required"
            });
        }
        //find user
        const user = await User.findById(userId).populate('additionalDetails').exec();
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        return res.status(200).json({
            success: true,
            message: "Profile fetched successfully",
            data: user.additionalDetails
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}




