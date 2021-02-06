// Global Imports
require("dotenv-safe").config();
const apiError = require("./middlewares/api-error");
const apiResponse = require("./middlewares/api-response");
const serverErrorLogger = require("./middlewares/server-error-logger");
const { PORT } = require("./utils/config");
const initDb = require("./utils/initDatabase");

class Server {
  constructor() {
    this.express = require("express");
    this.app = this.express();
    this.routes = require("./routes");
    this.applyPreMiddleWare();
    this.initRoutes();
    this.applyPostMiddleWare();
    this.initServer();
  }

  applyPreMiddleWare = () => {
    this.app.use(this.express.json());
  };

  applyPostMiddleWare = () => {
    this.app.use(apiResponse);
    !process.env.NODE_ENV && this.app.use(serverErrorLogger);
    this.app.use(apiError);
  };

  initServer = async () => {
    await initDb;
    this.app.listen(PORT, (err) => {
      if (err) throw err;
      console.log("Server Listening on Port - ", PORT);
    });
  };

  initRoutes = () => {
    this.app.use("/", this.routes);
  };
}

new Server();
