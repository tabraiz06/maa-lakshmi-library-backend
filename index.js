require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const admissionRoutes = require("./routes/admissionRoutes");
const adminRoutes = require("./routes/adminRoutes");
const contactRuutes = require("./routes/contactRoutes");
const verifyAdmin = require("./middleware/authMiddleware");

const app = express();

// Connect to Database
connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Handle form data

// Routes
app.use("/api", admissionRoutes);
// Admin Routes
app.use("/api/admin", adminRoutes);
app.use('/api',contactRuutes)

app.use((err, req, res, next) => {
  console.error("🔥 Global Error:", err);
  res.status(500).json({ error: err.message || "Something went wrong" });
});

// Protected Route Example
app.get("/api/admin/dashboard", verifyAdmin, (req, res) => {
  res.json({ message: "Welcome to Admin Dashboard" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
