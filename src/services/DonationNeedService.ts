import DonationNeed, { DonationNeedModel } from "../models/DonationNeed";
import { ManagerModel } from "../models/Manager";

export class DonationNeedService {

  public async saveDonationNeed(
    donationNeedModel: Partial<DonationNeedModel>,
    manager: ManagerModel
  ): Promise<DonationNeedModel> {
    donationNeedModel.manager = manager;

    const donationNeed = new DonationNeed(donationNeedModel);
    return await donationNeed.updateOne(donationNeedModel, { upsert : true });
  }

  public async getDonationNeedById(id: string): Promise<DonationNeedModel | null> {
    return await DonationNeed.findOne({ "_id": id }).populate("donationItem");
  }

  public async deleteDonationNeedById(id: string): Promise<any> {
    return await DonationNeed.deleteOne({ "_id": id });
  }

}
