const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.DB_URL) {
      throw new Error("DB_URL environment variable is not set");
    }

    await mongoose.connect(process.env.DB_URL);

    console.log("Database connected!");
  } catch (error) {
    console.log("Database connection failed: ", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
