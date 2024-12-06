const mongoose = require("mongoose");

// Define the schema
const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

// Create and export the model
const School = mongoose.model("School", schoolSchema);
module.exports = School;
