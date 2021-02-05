const router = require("express").Router();

router.get("/", (_request, response) => {
  response.send({ status: "ok" });
});

module.exports = router;
