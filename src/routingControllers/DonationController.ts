import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import Donation from "../models/Donation";

export class DonationController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get("/donations", this.getAllDonations);
    this.router.get("/createDonation", this.createDonation);
  }

  public async getAllDonations(req: express.Request, res: express.Response): Promise<void> {
    const donations = await Donation.find({});
    res.json(donations);
  }

  public async createDonation(req: express.Request, res: express.Response): Promise<void> {
    const donation = new Donation({
      description: "My first donation."
    });

    const newDonation = await donation.save();
    res.json(newDonation);
  }
}
