const yup = require("yup");

module.exports = yup.object().shape({
  otp: yup
    .number()
    .integer()
    .positive()
    .required()
    .min(100000, "OTP should be six digit.")
    .max(999999, "OTP should be six digit."),
});
