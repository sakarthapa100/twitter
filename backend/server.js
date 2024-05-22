require('dotenv').config();
const express = require("express");
const app = express();
const PORT = 8000;
const path = require('path');
const connectdb = require("./db/connect");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Cloudinary storage configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    format: async (req, file) => 'png', // supports promises as well
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({ storage });

// Endpoint to handle image uploads with enhanced logging and error handling
app.post('/upload', upload.single('file'), (req, res) => {
  console.log('Received file:', req.file); // Log the received file
  if (!req.file) {
    console.error('No file uploaded'); // Log error if no file is uploaded
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    const fileUrl = req.file.path;
    console.log('File URL:', fileUrl); // Log the file URL
    res.status(200).json({ imageUrl: fileUrl });
  } catch (error) {
    console.error('Error during file upload:', error); // Log the error
    res.status(500).json({ error: 'Error uploading file' });
  }
});

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true })); // to parse form data (urlencoded)
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// Routes
const authRoutes = require("./routes/userroutes");
const tweetRoutes = require("./routes/tweetroute");
const notificationRoutes = require("./routes/notificationroute");

app.use("/api/v1/user", authRoutes);
app.use("/api/v1/tweet", tweetRoutes);
app.use("/api/v1/notifications", notificationRoutes);

// Database connection and server start
connectdb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
});
