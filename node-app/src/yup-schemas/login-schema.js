const yup = require("yup");
const { phoneRegExp } = require("../utils/regexPatterns");

module.exports = yup.object().shape({
  phone: yup.string().matches(phoneRegExp, "Invalid Phone Format").required(),
});
