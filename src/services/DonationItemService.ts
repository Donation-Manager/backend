import { ManagerModel } from "../models/Manager";
import DonationItem, { DonationItemModel } from "../models/DonationItem";

export class DonationItemService {

  public async saveDonationItem(
    donationItemModel: Partial<DonationItemModel>
  ): Promise<DonationItemModel> {

    const donationItem = new DonationItem(donationItemModel);

    return await donationItem.save();
  }

}
