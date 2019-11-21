
import { Schema, Document } from "mongoose";
import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";
import { ManagerModel } from "./Manager";
import { DonationItemModel } from "./DonationItem";

export interface StockItemModel extends Document {
  dateCreationDate: Date;
  donationItem: DonationItemModel;
  itemQuantity: number;
  manager: ManagerModel;
}

const StockItemSchema = new Schema({
  dateCreationDate: { type: Date },
  donationItem: { type: Schema.Types.ObjectId, ref: ModelName.DonationItem },
  itemQuantity: { type: Number },
  manager: { type: Schema.Types.ObjectId, ref: ModelName.Manager }
});

export default assembleModel<StockItemModel>(ModelName.StockItem, StockItemSchema);
