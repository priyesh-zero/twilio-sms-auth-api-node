const router = require("express").Router();
const Users = require("../../models/User");

router.post("/", async (_request, response) => {
  const result = await Users.create();
  return response.send({ result });
});

router.get("/", async (_request, response) => {
  const result = await Users.all();
  return response.send({ result });
});

module.exports = router;
