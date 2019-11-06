import DonationNeed, { DonationNeedModel } from "../models/DonationNeed";
import { ManagerModel } from "../models/Manager";

export class DonationNeedService {

  public async saveDonationNeed(
    donationNeedModel: Partial<DonationNeedModel>
    // manager: ManagerModel
  ): Promise<DonationNeedModel> {
    // donationNeedModel.manager = manager;

    const donationNeed = new DonationNeed(donationNeedModel);

    return await donationNeed.save();
  }

}
