const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  qualification: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  joiningDate: { type: String, required: true },
  shift: { type: String, required: true },
  timing: { type: String, required: true },
  package: { type: String, required: true },
  studentImage: { type: String, required: true },
  aadharFront: { type: String, required: true },
  aadharBack: { type: String, required: true },
});

module.exports = mongoose.model("Student", StudentSchema);
