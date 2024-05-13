require('dotenv').config()
const mongoose = require("mongoose");

// MONGO_URI="mongodb+srv://clownlaugh100:TsNTBH44tE5xzERk@cluster0.v7hjzeu.mongodb.net/twitter-db?retryWrites=true&w=majority&appName=Cluster0"


const connectdb = async () => {
try {
  await mongoose.connect(process.env.MONGO_URI)
  console.log("connection sucessful db")
} catch (error) {
  console.error("Database connection error")
}

}

module.exports = connectdb;
