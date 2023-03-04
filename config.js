const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URI = "mongodb+srv://Chintushig:bwD5Q8gJXcrbhkw@cluster0.eipjkzz.mongodb.net/sdaa?retryWrites=true&w=majority"

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(MONGODB_URI);
    console.log("Successfully connected to MongoDB")
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = connect;