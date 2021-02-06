const yup = require("yup");
const { phoneRegExp } = require("../utils/regexPatterns");

module.exports = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(3, "Name can not be less than 3")
    .max(25, "Your name is too long, try using initials."),
  phone: yup.string().matches(phoneRegExp, "Invalid Phone Format").required(),
});
