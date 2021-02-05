const mongoose = require("mongoose");
const userSchema = require("../schemas/User");

class User {
  constructor() {
    this.userModel = mongoose.model("User", userSchema);
  }
}

module.exports = User;
