const mongoose = require("mongoose");

// Function to connect to MongoDB database
const connectDB = async () => {
  try {
    // Establish connection to MongoDB using mongoose.connect()
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

    // Log a message indicating successful connection
    console.log(
      `MongoDB connected to: ${conn.connection.name} ::::::: ${conn.connection.host}`
    );
  } catch (error) {
    // Log error message if connection fails
    console.log(error);
    // Terminate the Node.js process if connection fails
    process.exit(1);
  }
};

// Export the connectDB function for use in other modules
module.exports = connectDB;
