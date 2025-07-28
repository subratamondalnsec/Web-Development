const { contactUsEmail } = require("../mail/templates/contactFormRes")
const {adminContactNotification}=require("../mail/templates/adminContactNotification")
const mailSender = require("../utils/mailSender")
require("dotenv").config()

exports.contactUsController = async (req, res) => {
  const { email, firstname, lastname, message, phoneNo, countrycode } = req.body
  console.log(req.body)
  try {
    // 1. Send confirmation to the user
    const emailRes = await mailSender(
      email,
      "Your Data send successfully",
      contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode)
    )
    console.log("User Email Res ", emailRes);

    // 2. Send notification to your personal email
    const adminEmailRes = await mailSender(
      process.env.ADMIN_MAIL,
      "New Contact Form Submission",
      adminContactNotification(email, firstname, lastname, message, phoneNo, countrycode)
    )
    console.log("Admin Email Res ", adminEmailRes);
    return res.json({
      success: true,
      message: "Email send successfully",
    })
  } catch (error) {
    console.log("Error", error)
    console.log("Error message :", error.message)
    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}
