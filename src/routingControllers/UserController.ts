import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import User, { UserModel } from "../models/User";
import { UserService } from "../services/UserService";

export class UserController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get("/users", this.getAllUsers.bind(this));
    this.router.get("/getLoggedUser", this.getLoggedUser.bind(this));
  }

  public async getAllUsers(req: express.Request, res: express.Response): Promise<void> {
    const users = await User.find({});
    res.json(users);
  }

  public async getLoggedUser(req: express.Request, res: express.Response): Promise<void> {
    const user = await UserService.getLoggedUser();
    res.json(user);
  }
}
