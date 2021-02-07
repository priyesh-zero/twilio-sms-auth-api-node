const router = require("express").Router();
const yupValidator = require("../../middlewares/yup-validator");
const Verification = require("../../models/Verification");
const Users = require("../../models/User");
const APIResponse = require("../../utils/api-response");
const verifyOtp = require("../../yup-schemas/verify-otp");
const sendOTP = require("../../utils/sendOTP");
const loginSchema = require("../../yup-schemas/login-schema");
const { tempAuthMiddleware } = require("../../middlewares/auth");
const APIError = require("../../utils/api-error");
const { signTempToken, signToken } = require("../../utils/jwt");

router.post(
  "/verify",
  tempAuthMiddleware,
  yupValidator(verifyOtp),
  async (request, _, next) => {
    const { otp, registration } = request.body;
    try {
      if (otp === request.otp.otp) {
        registration && (await Users.verify(request.otp.uid));
        const accessToken = signToken(request.otp.uid);
        next(APIResponse.createResponseWithJson({ accessToken }));
      } else {
        next(APIError.badRequest("Invalid OTP"));
      }
    } catch (e) {
      next(e);
    }
  }
);

router.post("/login", yupValidator(loginSchema), async (request, _, next) => {
  try {
    const { phone } = request.body;
    const uid = await Users.getUid(phone);
    const vid = await sendOTP(uid, phone);
    const accessToken = signTempToken(vid, "5m");
    next(APIResponse.createResponseWithJson({ accessToken }));
  } catch (e) {
    next(e);
  }
});

module.exports = router;
