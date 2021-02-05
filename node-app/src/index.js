// Global Imports
require("dotenv-safe").config();
const { PORT } = require("./utils/config");
const initDb = require("./utils/initDatabase");

class Server {
  constructor() {
    this.express = require("express");
    this.app = this.express();
    this.routes = require("./routes");
    this.initRoutes();
    this.initServer();
    // itMiddlewares
  }

  initServer = async () => {
    try {
      await initDb;
      this.app.listen(PORT, (err) => {
        if (err) return console.error(err.message);
        console.log("Server Listening on Port - ", PORT);
      });
    } catch (e) {
      console.error(`Server Stopped`, e);
    }
  };

  initRoutes = () => {
    this.app.use("/", this.routes);
  };
}

new Server();
