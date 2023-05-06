const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://shazanrizvi:SAmY9panHWZQ6xDk@cluster0.hixljdc.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected to database successfully");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};

module.exports = connectToMongo;
