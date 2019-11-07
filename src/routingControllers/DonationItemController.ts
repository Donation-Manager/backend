import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import DonationItem from "../models/DonationItem";
import { DonationItemService } from "../services/DonationItemService";

export class DonationItemController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get("/donationItems", this.getAllDonationItems);
    this.router.get("/donationItemById", this.getDonationItemById);
    this.router.get("/createDonationItem", this.createDonationItem);
  }

  public async getAllDonationItems(req: express.Request, res: express.Response): Promise<void> {
    const donationItems = await DonationItem.find({});
    res.json(donationItems);
  }

  public async getDonationItemById(req: express.Request, res: express.Response): Promise<void> {
    const id = req.param("donationItemId");
    console.log(`id: ${id}`);
    const donationItem = await new DonationItemService().getDonationItemById(id);
    res.json(donationItem);
  }

  public async createDonationItem(req: express.Request, res: express.Response): Promise<void> {
    const donationItem = new DonationItem(req.body);
    const newDonationItem = await donationItem.save();
    res.json(newDonationItem);
  }
}
