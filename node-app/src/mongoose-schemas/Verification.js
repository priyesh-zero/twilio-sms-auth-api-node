const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  otp: Number,
  updated_at: Date,
  uid: String,
});
