
import { Schema, Document } from "mongoose";
import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";

export interface DonationItemModel extends Document {
  itemName: string;
  itemDescription: string;
  itemUOM: string; // UOM = Unit of Measure
}

const DonationItemSchema = new Schema({
  itemName: { type: String },
  itemDescription: { type: String },
  itemUOM: { type: String }
});

export default assembleModel<DonationItemModel>(ModelName.DonationItem, DonationItemSchema);
