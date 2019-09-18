import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import Giver from "../models/Giver";

export class GiverController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get("/givers", this.getAllGivers);
    this.router.get("/createGiver", this.createGiver);
  }

  public async getAllGivers(req: express.Request, res: express.Response): Promise<void> {
    const givers = await Giver.find({});
    res.json(givers);
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
