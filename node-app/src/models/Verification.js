const dayjs = require("dayjs");
const mongoose = require("mongoose");
const verficationSchema = require("../mongoose-schemas/Verification");
const APIError = require("../utils/api-error");

class Verification {
  constructor() {
    this.verificationModel = mongoose.model("Verification", verficationSchema);
  }
  createOtpEntry = async (uid, otp) => {
    const entry = await this.verificationModel.findOneAndUpdate(
      { uid },
      { otp, uid, updated_at: new Date() },
      { upsert: true, new: true }
    );
    return entry._id;
  };

  verifyOTP = async (id) => {
    const verifyEntry = await this.verificationModel.findById(id);
    if (!verifyEntry) {
      throw APIError.badRequest("Invalid OTP");
    }
    const expiryTime = dayjs(verifyEntry.updated_at).add(5, "minute");
    if (!dayjs().isBefore(expiryTime, "minute")) {
      throw APIError.badRequest("OTP Expired");
    }
    return verifyEntry;
  };

  getVerificationEntry = async (id) => {
    return await this.verificationModel.findById(id);
  };
}

module.exports = new Verification();
