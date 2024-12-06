require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./config/db");
const schoolRoutes = require("./routes/schoolRoutes");

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use("/api/schools", schoolRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
