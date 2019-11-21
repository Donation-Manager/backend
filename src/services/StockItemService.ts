import DonationNeed, { DonationNeedModel } from "../models/DonationNeed";
import { ManagerModel } from "../models/Manager";
import StockItem, { StockItemModel } from "../models/StockItem";
import DonationItem from "../models/DonationItem";
import { DonationItemService } from "./DonationItemService";

export class StockItemService {

  public async saveStockItem(
    stockItemModel: Partial<StockItemModel>,
    manager: ManagerModel
  ): Promise<StockItemModel> {
    stockItemModel.manager = manager;

    if (stockItemModel.donationItem) {
      const existentDonationItem =
        await new DonationItemService().getDonationItemByName(stockItemModel.donationItem.itemName);
      const existentStockItem =
        await new StockItemService().getStockItemByDonationItemName(stockItemModel.donationItem.itemName);
      const donationItem = new DonationItem(stockItemModel.donationItem);

      if (!existentDonationItem) {
        await  donationItem.updateOne(stockItemModel.donationItem, { upsert : true });
      } else {
        donationItem._id = existentDonationItem._id;
        await  donationItem.updateOne(stockItemModel.donationItem, { upsert : true });
      }

      stockItemModel.donationItem = donationItem._id;

      const stockItem = new StockItem(stockItemModel);
      if (!existentStockItem) {
        return await  stockItem.updateOne(stockItemModel, { upsert : true });
      } else {
        return await  existentStockItem.updateOne(stockItemModel, { upsert : true });
      }
    }
  }

  public async getStockItemByDonationItemName(itemName: string): Promise<StockItemModel | null> {
    const existentDonationItem =
      await new DonationItemService().getDonationItemByName(itemName);
    if (existentDonationItem) {
      return await StockItem.findOne({ "donationItem": existentDonationItem });
    }
    return null;
  }

  public async getStockItemById(id: string): Promise<StockItemModel | null> {
    return await StockItem.findOne({ "_id": id }).populate("donationItem");
  }

  public async deleteStockItemById(id: string): Promise<any> {
    return await StockItem.deleteOne({ "_id": id });
  }

  public async deleteAllStockItems(): Promise<any> {
    return await StockItem.deleteMany({ });
  }

}
