import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import DonationIntention from "../models/DonationIntention";
import Giver from "../models/Giver";

export class DonationIntentionController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get("/donationIntentions", this.getAllDonationIntentions);
    this.router.get("/createDonationIntention", this.createDonationIntention);
  }

  public async getAllDonationIntentions(req: express.Request, res: express.Response): Promise<void> {
    const donationIntentions = await DonationIntention.find({});
    res.json(donationIntentions);
  }

  public async createDonationIntention(req: express.Request, res: express.Response): Promise<void> {
    const donationIntention = new DonationIntention({
      collectFromGiver: true,
      collectDate: new Date(),
      description: "Test intention",
      giver: new Giver({
        name: "Maria"
      })
    });

    const newDonationIntention = await donationIntention.save();
    res.json(newDonationIntention);
  }
}
