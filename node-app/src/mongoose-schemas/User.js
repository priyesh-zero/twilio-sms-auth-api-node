const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  name: String,
  phone: { type: String, unique: true },
  validated: { type: Boolean, default: false },
});
