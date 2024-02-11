const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/climathone-backend");
    console.log("db connect");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
