const router = require("express").Router();
const Users = require("../../models/User");
const yupValidator = require("../../middlewares/yup-validator");
const registrationSchema = require("../../yup-schemas/registration-schema");
const APIError = require("../../utils/api-error");
const APIResponse = require("../../utils/api-response");
const sendOTP = require("../../utils/sendOTP");
const { signTempToken } = require("../../utils/jwt");
const { authMiddleware } = require("../../middlewares/auth");

router.post(
  "/",
  yupValidator(registrationSchema),
  async (request, __, next) => {
    const { name, phone } = request.body;
    try {
      const userId = await Users.create(name, phone);
      const vid = await sendOTP(userId, phone);
      const tempAccessToken = signTempToken(vid, "5m");
      next(
        APIResponse.createResponseWithCustomCode(201, {
          accessToken: tempAccessToken,
        })
      );
    } catch (e) {
      next(e);
    }
  }
);

router.get("/", authMiddleware, async (_, __, next) => {
  try {
    const result = await Users.all();
    next(APIResponse.createResponseWithJson(result));
  } catch (e) {
    next(e);
  }
});

module.exports = router;
