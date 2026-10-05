const mongoose = require("mongoose");

const dns = require("dns");

dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
])


const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected sucessfully");

  }catch (error) {
    console.error("mongoDB connection failed: error.message");
    process.exit(1);
  }
};

module.exports = connectDB;