import DonationIntention, { DonationIntentionModel } from "../models/DonationIntention";
import Giver, { GiverModel } from "../models/Giver";

export class DonationIntentionService {

  public async saveDonationIntention(
    donationIntentionModel: Partial<DonationIntentionModel>,
    giverModel: GiverModel
  ): Promise<DonationIntentionModel> {
    donationIntentionModel.giver = giverModel;

    const donationIntention = new DonationIntention(donationIntentionModel);

    return await donationIntention.save();
  }

}
