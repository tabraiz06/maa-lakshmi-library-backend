const express = require("express");
const { adminLogin, adminRegister } = require("../controllers/adminController");

const router = express.Router();

// Admin Login Route
router.post("/login", adminLogin);
router.post("/register", adminRegister);

module.exports = router;
