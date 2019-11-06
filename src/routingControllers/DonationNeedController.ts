import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import DonationNeed from "../models/DonationNeed";
import { DonationNeedService } from "../services/DonationNeedService";
import { ManagerService } from "../services/ManagerService";

export class DonationNeedController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get("/donationNeeds", this.getAllDonationNeeds);
    this.router.post("/createDonationNeed", this.createDonationNeed);
  }

  public async getAllDonationNeeds(req: express.Request, res: express.Response): Promise<void> {
    const donationNeeds = await DonationNeed.find({}).populate("manager");
    res.json(donationNeeds);
  }

  public async createDonationNeed(req: express.Request, res: express.Response): Promise<void> {
    console.log(req.body);

    const donationNeed = req.body;

    const newDonationNeed = await new DonationNeedService().saveDonationNeed(
      donationNeed,
      await ManagerService.getLoggedManager()
    );
    res.json(newDonationNeed);
  }
}
