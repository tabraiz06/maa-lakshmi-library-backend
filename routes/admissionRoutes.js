const express = require("express");
const multer = require("multer");
const {
  addStudent,
  getStudents,
  deleteStudent,
} = require("../controllers/admissionController");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();



router.post(
  "/admission",
  upload.fields([
    { name: "studentImage", maxCount: 1 },
    { name: "aadharFront", maxCount: 1 },
    { name: "aadharBack", maxCount: 1 },
  ]),
  addStudent
); // Add a new student
router.get("/admission", getStudents); // Get all students
router.delete("/admission/:id", deleteStudent); // Delete a student

module.exports = router;
