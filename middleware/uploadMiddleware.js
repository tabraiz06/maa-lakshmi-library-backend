const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// Configure Multer for Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "student_images",
    allowed_formats: ["jpg", "png", "jpeg"],
    access_mode: "public", // Make the file public
  },
});

const upload = multer({ storage });

module.exports = upload;
