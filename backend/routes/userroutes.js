const express = require("express");
const router = express.Router();
const { login, logout, signup, bookmark, getMyProfile, getOtherUser, follow, unfollow } = require("../controllers/usercontroller");
const { isAuthenticated } = require("../middleware/authenticated");
const multer = require('multer');
const path = require('path');
const User = require("../models/usermodel"); // Ensure you have this import for User model

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/public'); // Adjust the path where you want to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Route to update profile picture
router.post('/updateProfilePicture', isAuthenticated, upload.single('profilePicture'), async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you're using a middleware to get the authenticated user's ID
    const profilePictureUrl = `/uploads/${req.file.filename}`;

    // Update user's profile picture URL
    await User.findByIdAndUpdate(userId, { profilePicture: profilePictureUrl });

    res.status(200).json({ message: 'Profile picture updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update profile picture' });
  }
});

// Auth routes
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);

// Bookmark route
router.route("/bookmark/:id")
  .put(isAuthenticated, bookmark);

// Profile routes
router.route("/profile/:id")
  .get(isAuthenticated, getMyProfile);

router.route("/otheruser/:id")
  .get(isAuthenticated, getOtherUser);

// Follow/unfollow routes
router.route("/follow/:id")
  .post(isAuthenticated, follow);

router.route("/unfollow/:id")
  .post(isAuthenticated, unfollow);

module.exports = router;
