const mongoose = require("mongoose");
const { MURL, MDB, MUSER, MPASS, MPORT } = require("./config");

module.exports = new Promise(async (resolve, reject) => {
  mongoose.connect(
    `${MURL}:${MPORT}/${MDB}`,
    {
      auth: {
        authSource: "admin",
      },
      user: MUSER,
      pass: MPASS,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) return reject(err.message);
      resolve();
    }
  );
});
