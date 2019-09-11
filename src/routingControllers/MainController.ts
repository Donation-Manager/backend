import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import { MainRoutes } from "./definitions/routes";

export class MainController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get(MainRoutes.RootRoute, this.rootRoute);
  }

  public rootRoute(req: express.Request, res: express.Response): void {
    res.status(200).send({
        message: "GET request test!!"
    });
  }
}
