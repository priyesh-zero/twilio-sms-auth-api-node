const mongoose = require("mongoose");
const userSchema = require("../mongoose-schemas/User");
const APIError = require("../utils/api-error");

class User {
  constructor() {
    this.userModel = mongoose.model("User", userSchema);
  }
  // Create a New User
  create = async (name, phone) => {
    const existingUser = await this.userModel.findOne({
      phone,
      validated: true,
    });
    if (existingUser) {
      throw APIError.badRequest("User already exits");
    }
    const user = await this.userModel.findOneAndUpdate(
      { phone },
      { phone, name, validated: false },
      { upsert: true, new: true }
    );
    return user._id;
  };
  // List all users
  all = async () => {
    const users = await this.userModel.find();
    return users;
  };
  // Verify Registration
  verify = async (uid) => {
    await this.userModel.findByIdAndUpdate(uid, {
      validated: true,
    });
  };
  // Get Uid from Phone for validated user
  getUid = async (phone) => {
    const user = await this.userModel.findOne({ phone, validated: true });
    if (!user) {
      throw APIError.badRequest("User Record does not exists");
    }
    return user._id;
  };
}

module.exports = new User();
