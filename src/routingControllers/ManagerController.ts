import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import Manager from "../models/Manager";
import { ManagerService } from "../services/ManagerService";

export class ManagerController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get("/managers", this.getAllManagers);
    this.router.get("/createManager", this.createManager);
    this.router.get("/getManager", this.getManager);
    this.router.get("/getLoggedManager", this.getLoggedManager);
  }

  public async getAllManagers(req: express.Request, res: express.Response): Promise<void> {
    const managers = await Manager.find({});
    res.json(managers);
  }

  public async getManager(req: express.Request, res: express.Response): Promise<void> {
    const managers = await Manager.findOne(req.params);
    res.json(managers);
  }

  public async getLoggedManager(req: express.Request, res: express.Response): Promise<void> {
    const manager = await ManagerService.getLoggedManager();
    res.json(manager);
  }

  public async createManager(req: express.Request, res: express.Response): Promise<void> {
    console.log(req.body);

    const managerData = req.body;
    const manager = new Manager(managerData);

    const newManager = await manager.save();
    res.json(newManager);
  }
}
