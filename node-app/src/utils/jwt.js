const jwt = require("jsonwebtoken");
const { JSECRET } = require("./config");

const signToken = (uid) => {
  return jwt.sign({ uid }, JSECRET);
};

const verifyToken = (token) => {
  return jwt.verify(token, JSECRET);
};

const signTempToken = (id, expiresIn) => {
  return jwt.sign({ id }, JSECRET, { expiresIn });
};

module.exports = {
  signToken,
  verifyToken,
  signTempToken,
};
