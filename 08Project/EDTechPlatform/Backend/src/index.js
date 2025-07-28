const express = require("express")
const dbconnect =require("./config/database")
const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const courseRoutes = require("./routes/Course");
const paymentRoutes = require("./routes/Payments");
const contactUsRoute = require("./routes/Contact");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const cloudinary = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
require("dotenv").config()
const path=require("path");

// const _dirname=path.resolve();
// Middlewares
const app = express();
app.use(express.json());
app.use(cookieParser());

// const __dirname = path.resolve();

// Setting up port number
const PORT = process.env.PORT || 4000;

const allowedOrigins = [
  "http://localhost:3000",//frontend port
]

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    credentials: true,
  })
)

app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);

// Setting up routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);


// app.use(express.static(path.join(_dirname,"/client/build")));
// app.get("*",(req,res)=>{
// 	res.sendFile(path.resolve(_dirname,"client","build","index.html"));
// });

// app.use(express.static(path.join(__dirname, "../client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});


const InitlizeConnection = async()=>{

    try{
        await dbconnect();
        console.log("connected to MongoDB");
        cloudinary.cloudinaryConnect();
         console.log("connected to Cloudinary");
        app.listen(PORT, ()=>{
            console.log(`Listening at port ${PORT} `);
        })
    }
    catch(err){
        console.log("Error "+err);
    }
}

InitlizeConnection();
