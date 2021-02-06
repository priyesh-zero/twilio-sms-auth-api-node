const Verification = require("../models/Verification");

module.exports = async (uid) => {
  const otp = Math.floor(Math.random() * 1000000);
  // Send SMS
  return await Verification.createOtpEntry(uid, otp);
};
