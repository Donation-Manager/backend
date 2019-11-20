import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import DonationNeed from "../models/DonationNeed";
import { DonationNeedService } from "../services/DonationNeedService";
import { ManagerService } from "../services/ManagerService";

export class DonationNeedController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get("/donationNeeds", this.getAllDonationNeeds);
    this.router.get("/donationNeedById", this.getDonationNeedById);
    this.router.post("/createDonationNeed", this.createDonationNeed);
    this.router.post("/deleteDonationNeedById", this.deleteDonationNeedById);
  }

  public async getAllDonationNeeds(req: express.Request, res: express.Response): Promise<void> {
    const donationNeeds = await DonationNeed.find({}).populate("manager").populate("donationItem");
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

  public async getDonationNeedById(req: express.Request, res: express.Response): Promise<void> {
    const id = req.param("donationNeedId");
    console.log(`id: ${id}`);
    const donationNeed = await new DonationNeedService().getDonationNeedById(id);
    res.json(donationNeed);
  }

  public async deleteDonationNeedById(req: express.Request, res: express.Response): Promise<void> {
    const donationNeedId = req.body.donationNeedId;
    if (donationNeedId) {
      const response = await new DonationNeedService().deleteDonationNeedById(donationNeedId);
      res.json(response);
    }
  }

}
