const router = require("express").Router();
const userRoutes = require("./api/User");

router.use("/api/user", userRoutes);

router.get("/", (_request, response) => {
  response.send({ status: "ok" });
});

module.exports = router;
