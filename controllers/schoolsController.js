const School = require("../models/schools");

// Add new school
const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || latitude == null || longitude == null) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create the new school
    const newSchool = new School({ name, address, latitude, longitude });
    await newSchool.save();

    res
      .status(201)
      .json({ message: "School added successfully", school: newSchool });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error adding school", details: error.message });
  }
};

// List schools sorted by proximity
const listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    // Validate input fields
    if (latitude == null || longitude == null) {
      return res
        .status(400)
        .json({ error: "Latitude and longitude are required" });
    }

    const userLat = parseFloat(latitude);
    const userLng = parseFloat(longitude);

    // Fetch all schools
    const schools = await School.find();

    // Calculate distance using the Haversine formula
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const toRad = (value) => (value * Math.PI) / 180;
      const R = 6371; // Radius of Earth in km
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) *
          Math.cos(toRad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    };

    // Map and sort schools by distance
    const sortedSchools = schools
      .map((school) => ({
        ...school._doc,
        distance: calculateDistance(
          userLat,
          userLng,
          school.latitude,
          school.longitude
        ),
      }))
      .sort((a, b) => a.distance - b.distance);

    res.status(200).json(sortedSchools);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error retrieving schools", details: error.message });
  }
};

module.exports = {
  addSchool,
  listSchools,
};
