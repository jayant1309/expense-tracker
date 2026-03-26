require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// Route imports
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// ---------------------------
// ✅ CORS Configuration
// ---------------------------
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173", // Frontend URL
    credentials: true, // Allow cookies/tokens
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ---------------------------
// ✅ Middleware
// ---------------------------
app.use(express.json());

// ---------------------------
// ✅ Database Connection
// ---------------------------
connectDB();

// ---------------------------
// ✅ API Routes
// ---------------------------
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API server is running.",
    status: "OK",
  });
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

// ---------------------------
// ✅ Serve static uploads folder
// ---------------------------
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ---------------------------
// ✅ Start Server
// ---------------------------
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
