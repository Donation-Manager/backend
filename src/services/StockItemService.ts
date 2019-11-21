import DonationNeed, { DonationNeedModel } from "../models/DonationNeed";
import { ManagerModel } from "../models/Manager";
import StockItem, { StockItemModel } from "../models/StockItem";

export class StockItemService {

  public async saveStockItem(
    stockItemModel: Partial<StockItemModel>,
    manager: ManagerModel
  ): Promise<StockItemModel> {
    stockItemModel.manager = manager;

    const stockItem = new StockItem(stockItemModel);
    return await stockItem.updateOne(stockItemModel, { upsert : true });
  }

  public async getStockItemById(id: string): Promise<StockItemModel | null> {
    return await StockItem.findOne({ "_id": id }).populate("donationItem");
  }

  public async deleteStockItemById(id: string): Promise<any> {
    return await StockItem.deleteOne({ "_id": id });
  }

}
