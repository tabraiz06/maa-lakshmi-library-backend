require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const admissionRoutes = require("./routes/admissionRoutes");

const app = express();

// Connect to Database
connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Handle form data

// Routes
app.use("/api", admissionRoutes);

app.use((err, req, res, next) => {
  console.error("🔥 Global Error:", err);
  res.status(500).json({ error: err.message || "Something went wrong" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
