import * as express from "express";

class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }
  private mountRoutes(): void {
    const router = express.Routes();
    router.get("/", (req, res) => {
      res.jason({
        message: "Hello World!"
      });
    });
    this.express.use("/", router);
  }
}

export default new App().express;
