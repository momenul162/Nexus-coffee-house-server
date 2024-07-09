const mongoose = require("mongoose");
const error = require("./utils/error");

const connectDB = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI);
  } catch (err) {
    throw error(err, 502);
  }
};

module.exports = connectDB;
