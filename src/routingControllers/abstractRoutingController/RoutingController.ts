import * as express from "express";

export abstract class RoutingController {
  public router: express.Router = express.Router();

  constructor() {
    this.assembleRoutes();
  }

  public getRouter(): express.Router {
    return this.router;
  }

  protected abstract assembleRoutes(): void;
}
