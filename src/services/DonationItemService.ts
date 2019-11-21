import DonationItem, { DonationItemModel } from "../models/DonationItem";

export class DonationItemService {

  public async saveDonationItem(
    donationItemModel: Partial<DonationItemModel>
  ): Promise<DonationItemModel> {

    const donationItem = new DonationItem(donationItemModel);

    return await donationItem.save();
  }

  public async getDonationItemByName(itemName: string): Promise<DonationItemModel | null> {
    return await DonationItem.findOne({ "itemName": itemName });
  }

  public async getDonationItemById(id: string): Promise<DonationItemModel | null> {
    return await DonationItem.findOne({ "_id": id });
  }

  public async deleteAllDonationItems(): Promise<any> {
    return await DonationItem.deleteMany({ });
  }

}
