const router = require("express").Router();
const userRoutes = require("./api/User");
const authRoutes = require("./api/Auth");

router.use("/api/user", userRoutes);
router.use("/api/auth", authRoutes);

router.get("/", (_, __, next) => {
  throw new Error("Custom Error");
});

module.exports = router;
