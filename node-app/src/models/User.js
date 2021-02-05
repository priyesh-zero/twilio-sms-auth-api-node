const mongoose = require("mongoose");
const userSchema = require("../schemas/User");

class User {
  constructor() {
    console.log(userSchema);
    this.userModel = mongoose.model("User", userSchema);
  }
  // Create a New User
  create = async () => {
    try {
      const user = new this.userModel({
        name: "User Name",
        phone: `${Math.ceil(Math.random() * 10000000000)}`,
      });
      console.log(user);
      await user.save();
      return "User was successfully created";
    } catch (e) {
      return e.message;
    }
  };
  // List all users
  all = async () => {
    try {
      const users = await this.userModel.find();
      return users;
    } catch (e) {
      return { error: e.message };
    }
  };
}

module.exports = new User();
