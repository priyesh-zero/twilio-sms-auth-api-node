const mongoose = require("mongoose");
const { MURL, MDB } = require("./config");

module.exports = new Promise((resolve, reject) => {
  console.log(MURL, MDB);
  mongoose.connect(
    `${MURL}/${MDB}`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) return reject(err.message);
      resolve();
    }
  );
});
