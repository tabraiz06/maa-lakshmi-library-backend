const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  studentImage: { type: String, required: true },
  aadharFront: { type: String, required: true },
  aadharBack: { type: String, required: true },
  joiningDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Student", StudentSchema);
