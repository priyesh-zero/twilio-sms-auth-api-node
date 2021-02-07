const router = require("express").Router();
const userRoutes = require("./api/User");
const authRoutes = require("./api/Auth");

router.use("/api/v1/user", userRoutes);
router.use("/api/v1/auth", authRoutes);

module.exports = router;
