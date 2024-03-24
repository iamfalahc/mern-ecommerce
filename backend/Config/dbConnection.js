const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

    console.log(
      `MOngoDB connected to: ${conn.connection.name} ::::::: ${conn.connection.host}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;



// module.exports = {
//     dbConnect:async()=>{
// try {
//     await mongoose.connect("mongodb://127.0.0.1:27017").then(()=>{
//         console.log("successfully connected")
//     })
// } catch (error) {
//     console.log(error)
// }
//     }
// }