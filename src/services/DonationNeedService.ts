import DonationNeed, { DonationNeedModel } from "../models/DonationNeed";
import { ManagerModel } from "../models/Manager";
import { DonationItemService } from "./DonationItemService";

export class DonationNeedService {

  public async saveDonationNeed(
    donationNeedModel: Partial<DonationNeedModel>,
    manager: ManagerModel
  ): Promise<DonationNeedModel> {
    donationNeedModel.manager = manager;

    if (donationNeedModel.donationItem) {
      donationNeedModel.donationItem = await new DonationItemService().saveDonationItem(donationNeedModel.donationItem);
    }

    const donationNeed = new DonationNeed(donationNeedModel);

    return await donationNeed.save();
  }

}
