const Verification = require("../models/Verification");
const { TSID, TKEY, TPHONE } = require("./config");
const twilio = require("twilio")(TSID, TKEY);

module.exports = async (uid, phone) => {
  const otp = Math.floor(Math.random() * (1000000 - 100000)) + 100000;
  // Send SMS
  const message = await twilio.messages.create({
    body: `Your OTP for authentication is ${otp}. This OTP will only be valid for 5mins.`,
    from: TPHONE,
    to: `+91${phone.substr(-10)}`,
  });
  console.log("message sent from Twilio", message);
  return await Verification.createOtpEntry(uid, otp);
};
