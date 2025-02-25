const Student = require("../models/Student");

const addStudent = async (req, res) => {
    
    // console.log("Received Files:", JSON.stringify(req.files, null, 2));
  try {

    if (
      !req.files ||
      !req.files.studentImage ||
      !req.files.aadharFront ||
      !req.files.aadharBack
    ) {
      return res.status(400).json({ message: "All images are required" });
    }

    const student = new Student({
      name: req.body.name,
      fatherName: req.body.fatherName,
      email: req.body.email,
      address: req.body.address,
      mobileNumber: req.body.mobileNumber,
      studentImage: req.files.studentImage[0].path,
      aadharFront: req.files.aadharFront[0].path,
      aadharBack: req.files.aadharBack[0].path,
    });

    await student.save();
    return res.status(201).json({ message: "Admission successful", student });
  } catch (error) {
    console.error("❌ Server Error:", error);
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    return res.status(200).json({ students });
  } catch (error) {
    console.error("❌ Server Error:", error);
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
}


module.exports = { addStudent, getStudents };
