import * as Express from "express";
import * as BodyParser from "body-parser";
import * as Cors from "cors";
import { MainController } from "./routingControllers/MainController";
import { DonationController } from "./routingControllers/DonationController";
import { GiverController } from "./routingControllers/GiverController";
import { DonationIntentionController } from "./routingControllers/DonationIntentionController";
import { UserController } from "./routingControllers/UserController";
import { DonationNeedController } from "./routingControllers/DonationNeedController";
import { ManagerController } from "./routingControllers/ManagerController";
import { DonationItemController } from "./routingControllers/DonationItemController";

class App {
  public app: Express.Application;

  constructor() {
    this.app = Express();
    this.config();
  }

  private config(): void {
    this.app.use(Cors());
    // support application/json
    this.app.use(BodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(BodyParser.urlencoded({ extended: false }));
    this.app.use("/", new MainController().getRouter());
    this.app.use(new DonationController().getRouter());
    this.app.use(new GiverController().getRouter());
    this.app.use(new UserController().getRouter());
    this.app.use(new DonationIntentionController().getRouter());
    this.app.use(new DonationNeedController().getRouter());
    this.app.use(new ManagerController().getRouter());
    this.app.use(new DonationItemController().getRouter());
  }
}
export default new App().app;
