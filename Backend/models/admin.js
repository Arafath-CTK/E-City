const mongoose = require("../config/database");

const adminSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String },
  register_date: { type: String },
});
