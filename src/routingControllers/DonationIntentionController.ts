import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import DonationIntention, { DonationIntentionModel } from "../models/DonationIntention";
import DonationNeed, { DonationNeedModel } from "../models/DonationNeed";
import DonationItem, { DonationItemModel } from "../models/DonationItem";
import Giver from "../models/Giver";
import { DonationIntentionService } from "../services/DonationIntentionService";
import { DonationItemService } from "../services/DonationItemService";
import { GiverService } from "../services/GiverService";

export class DonationIntentionController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get("/donationIntentions", this.getPendingDonationIntentions);
    this.router.post("/createDonationIntention", this.createDonationIntention);
    this.router.post("/acceptDonation", this.acceptDonation);
    this.router.post("/rejectDonation", this.rejectDonation);
    this.router.get("/allDonationsIntentions", this.all);
    this.router.get("/approvedDonationsIntentions", this.getApprovedDonationIntentions);
  }

  public async getPendingDonationIntentions(req: express.Request, res: express.Response): Promise<void> {
    const donationIntentions = await DonationIntention.find({ approved: false }).populate("giver").populate("donationNeed");
    console.log(donationIntentions);
    // await donationIntentions.forEach(async (item) => {
    //   const donationItem = await service.getDonationItemById(item.donationNeed.donationItem._id);
    //   console.log(donationItem);
    //   item.donationNeed.donationItem = donationItem;
    // });
    res.json(donationIntentions);
  }

  public async createDonationIntention(req: express.Request, res: express.Response): Promise<void> {
    console.log(req.body);

    const donationIntention = req.body;
    donationIntention.approved = false;

    const newDonationIntention = await new DonationIntentionService().saveDonationIntention(
      donationIntention,
      await GiverService.getLoggedGiver()
    );
    res.json(newDonationIntention);
  }

  public async acceptDonation(req: express.Request, res: express.Response): Promise<void> {
    console.log(req.body);
    const intentionId = req.param("intentionId");
    console.log(`accept id: ${intentionId}`);
    const intention = await DonationIntention.findOne({ _id: intentionId });
    intention.approved = true;
    res.json(await intention.save());
  }

  public async rejectDonation(req: express.Request, res: express.Response): Promise<void> {
    console.log(req.body);
    const intentionId = req.param("intentionId");
    console.log(`reject id: ${intentionId}`);
    res.json(await DonationIntention.deleteOne({ _id: intentionId }));
  }

  public async all(req: express.Request, res: express.Response): Promise<void> {
    const donationIntentions = await DonationIntention.find({}).populate("giver").populate("donationNeed");
    console.log(donationIntentions);
    res.json(donationIntentions);
  }

  public async getApprovedDonationIntentions(req: express.Request, res: express.Response): Promise<void> {
    const donationIntentions = await DonationIntention.find({ approved: true }).populate("giver").populate("donationNeed");
    console.log(donationIntentions);
    res.json(donationIntentions);
  }
}
