const Users = require("../models/User");
const Verification = require("../models/Verification");
const APIError = require("../utils/api-error");
const { verifyToken } = require("../utils/jwt");

const tempAuthMiddleware = async (request, _, next) => {
  try {
    const bearerToken = request.header("AUTHORIZATION");
    if (bearerToken && bearerToken.split(" ").length === 2) {
      const jwtPayload = verifyToken(bearerToken.split(" ")[1]);
      const verifyEntry = await Verification.verifyOTP(jwtPayload.id);
      request.otp = verifyEntry;
      next();
    } else {
      next(APIError.authFailError());
    }
  } catch (e) {
    next(APIError.authFailError(e.message));
  }
};

const authMiddleware = async (request, _, next) => {
  try {
    const bearerToken = request.header("AUTHORIZATION");
    if (bearerToken && bearerToken.split(" ").length === 2) {
      const jwtPayload = verifyToken(bearerToken.split(" ")[1]);
      request.user = { id: jwtPayload.id };
      next();
    } else {
      next(APIError.authFailError());
    }
  } catch (e) {
    next(APIError.authFailError(e.message));
  }
};

module.exports = {
  tempAuthMiddleware,
  authMiddleware,
};
