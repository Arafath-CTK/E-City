const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error", err));

module.exports = mongoose;


// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//     });
//     console.log('MongoDB connected successfully!');
//   } catch (err) {
//     console.error('MongoDB connection error:', err.message);
//     process.exit(1); // Exit with failure
//   }
// };

// module.exports = connectDB;