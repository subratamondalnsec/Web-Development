const SubSection=require('../models/SubSection');
const Section=require('../models/Section');
const {uploadFiles}=require('../utils/FileUploader');
require('dotenv').config();
//Create a new SubSection
exports.createSubSection = async (req, res) => {
    try {
        //data fetch
        const { sectionId, title, timeDuration, description } = req.body;
        //extracting video/file from request
        const video=req.files.videoFile;

        // validation Check
        if (!sectionId || !title || !timeDuration || !description || !video) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
                data: null,
            });
        }
        //upload video to cloudinary
        const uploadDetails = await uploadFiles(video, process.env.CLOUDINARY_COURSE_FOLDER, 90);
        //create SubSection 
        const subSectionDetails = await SubSection.create({ 
            title:title, 
            timeDuration:timeDuration,
            description:description,
            videoUrl: uploadDetails.secure_url
        });

        //update section with new subSectionID
        const updateSection = await Section.findByIdAndUpdate(sectionId, {
            $push: {
                subSections: subSectionDetails._id
            }
        }, { new: true });

        //use populate to response section/subsection both in the updateSectionDetails
        await updateSection.populate('subSections').execPopulate();

        //response
        return res.status(201).json({
            success: true,
            message: "SubSection created successfully",
            data: subSectionDetails
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating subsection",
            error: error.message
        });
    }
}