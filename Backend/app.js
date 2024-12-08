require("dotenv").config();
const express = require("express");
const adminRouter = require("./routes/admin");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true for https only
  })
);
app.use(express.urlencoded({ extended: true })); //same use of body parser. its built in express itself.
app.use(express.json()); // for parsing json to js object.

app.use("/admin", adminRouter);

//Server hosting locally
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on : http://localhost:${port}`);
});

// require('dotenv').config(); // Load environment variables
// const express = require('express');
// const mongoose = require('./config/database'); // MongoDB connection
// const app = express();

// // Middleware
// app.use(express.json()); // To parse JSON bodies

// // Connect to MongoDB
// mongoose();

// // Basic route for testing
// app.get('/', (req, res) => {
//   res.send('Server is running and MongoDB is connected!');
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
