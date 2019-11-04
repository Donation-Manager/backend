import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import Giver from "../models/Giver";
import { GiverService } from "../services/GiverService";

export class GiverController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get("/givers", this.getAllGivers);
    this.router.get("/createGiver", this.createGiver);
    this.router.get("/getGiver", this.getGiver);
    this.router.get("/getLoggedGiver", this.getLoggedGiver);
  }

  public async getAllGivers(req: express.Request, res: express.Response): Promise<void> {
    const givers = await Giver.find({});
    res.json(givers);
  }

  public async getGiver(req: express.Request, res: express.Response): Promise<void> {
    const givers = await Giver.findOne(req.params);
    res.json(givers);
  }

  public async getLoggedGiver(req: express.Request, res: express.Response): Promise<void> {
    const giver = await GiverService.getLoggedGiver();
    res.json(giver);
  }

  public async createGiver(req: express.Request, res: express.Response): Promise<void> {
    const giver = new Giver({
      name: "Joao da Silva",
      dateOfBirth: new Date(),
      cpf: "4312333434"
    });

    const newGiver = await giver.save();
    res.json(newGiver);
  }
}
