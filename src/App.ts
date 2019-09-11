import * as express from "express";
import * as bodyParser from "body-parser";
import { MainController } from "./routingControllers/MainController";
import { DonationController } from "./routingControllers/DonationController";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // support application/json
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use("/", new MainController().getRouter());
    this.app.use("/", new DonationController().getRouter());
  }
}
export default new App().app;
