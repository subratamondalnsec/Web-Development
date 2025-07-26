const Section=require('../models/Section');
const Course=require('../models/Course');

//Create a new Section
exports.createSection = async (req, res) => {
    try{
        //data fetch
        const {courseId,sectionName}=req.body;

        // validation Check
        if(!courseId || !sectionName) {
            return res.status(400).json({ 
                success: false,
                message: "Course ID and Section Name are required" ,
                data: null,
            });
        }
        //create Section 
        const newSection = Section.create({ sectionName });

        //update course with new sectionID
        const updateCourseDetails = await Course.findByIdAndUpdate(courseId,{
            $push:{
                courseContent: newSection._id
            }
        },{new:true},);

        //use populate to response section/subsection both in the updateCourseDetails
        
        // await updateCourseDetails.populate({ path: 'courseContent', populate: { path: 'subSections' } }).exec();
        await updateCourseDetails.populate({
            path: 'courseContent',           // Populate the Section documents
            populate: {
            path: 'subSection',            // For each Section, populate its SubSection documents
            }
        })
        .execPopulate(); // or .exec() if using a query

        //response
        return res.status(201).json({
            success: true,
            message: "Section created successfully",
            data: newSection
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating section",
            error: error.message
        });
    }
};


//update a Section
exports.updateSection = async (req, res) => {
    try {
        //data fetch
        const { sectionId, sectionName } = req.body;

        // validation Check
        if (!sectionId || !sectionName) {
            return res.status(400).json({
                success: false,
                message: "Section ID and Section Name are required",
                data: null,
            });
        }

        //update Section
        const updatedSection = await Section.findByIdAndUpdate(
            sectionId,
            { sectionName },
            { new: true }
        );

        //response
        return res.status(200).json({
            success: true,
            message: "Section updated successfully",
            data: updatedSection
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating section",
            error: error.message
        });
    }
}
