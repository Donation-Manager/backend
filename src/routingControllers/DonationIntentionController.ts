import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import DonationIntention, { DonationIntentionModel } from "../models/DonationIntention";
import Giver from "../models/Giver";
import { DonationIntentionService } from "../services/DonationIntentionService";
import { GiverService } from "../services/GiverService";

export class DonationIntentionController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get("/donationIntentions", this.getAllDonationIntentions);
    this.router.post("/createDonationIntention", this.createDonationIntention);
  }

  public async getAllDonationIntentions(req: express.Request, res: express.Response): Promise<void> {
    const donationIntentions = await DonationIntention.find({}).populate("giver");
    res.json(donationIntentions);
  }

  public async createDonationIntention(req: express.Request, res: express.Response): Promise<void> {
    console.log(req.body);

    const donationIntention = req.body;

    const newDonationIntention = await new DonationIntentionService().saveDonationIntention(
      donationIntention,
      await GiverService.getLoggedGiver()
    );
    res.json(newDonationIntention);
  }
}
