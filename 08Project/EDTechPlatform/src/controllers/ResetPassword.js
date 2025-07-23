const User=require('../models/User');
const mailSender=require('../utils/mailSender');
const bcrypt = require('bcrypt');
const validator = require('validator');
const crypto = require('crypto');

// Function to reset password token generation
exports.resetPasswordToken = async (req, res) => {
    try {
        //get email from request body
        const { email } = req.body;

        // Validate email
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format",
            });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "You are not registered",
            });
        }

        // Generate reset token
        const resetToken = crypto.randomUUID(); // Using UUID for simplicity, you can use any token generation method
        // Save reset token and expiry time in user model
        const updatedDetails = await User.findByIdAndUpdate(user._id, {
            token: resetToken,
            resetPasswordExpires: Date.now() + 5 * 60 * 1000 // 5 minutes expiry
        }, { new: true });
    
        //create url for reset password
        const resetUrl = `http://localhost:3000/update-password/${resetToken}`;

        // Send email with reset token
        await mailSender(email, "Password Reset Link", `Your password reset link is: ${resetUrl}`);

        return res.status(200).json({
            success: true,
            message: "Reset token sent to your email",
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

// Function to reset password
exports.resetPassword = async (req, res) => {
    try {
        const { token, Password, ConfirmPassword } = req.body;

        // Validate input
        if (!token || !Password || !ConfirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Token, password and confirm password are required",
            });
        }
        if (!validator.isStrongPassword(Password)) {
            return res.status(403).json({
                success: false,
                message: "Weak Password",
            });
        }

        // Check if passwords match
        if (Password !== ConfirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match",
            });
        }

        // Find user by reset token and check expiry
        const user = await User.findOne({ token:token });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired token",
            });
        }
        // Check if token has expired
        if (user.resetPasswordExpires < Date.now()) {
            return res.status(400).json({
                success: false,
                message: "Token has expired",
            });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Update user's password and clear token and expiry
        await User.findByIdAndUpdate(user._id, {
            password: hashedPassword,
            token: undefined,
            resetPasswordExpires: undefined
        },{new:true});

        return res.status(200).json({
            success: true,
            message: "Password has been reset successfully",
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}