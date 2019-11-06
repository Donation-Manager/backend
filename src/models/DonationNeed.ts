
import { Schema, Document } from "mongoose";
import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";

export interface DonationNeedModel extends Document {
  dateCreationDate: Date;
  itemName: string;
  itemDescription: string;
  itemQuantity: number;
}

const DonationNeedSchema = new Schema({
  dateCreationDate: { type: Date },
  itemName: { type: String },
  itemDescription: { type: String },
  itemQuantity: { type: Number }
  // manager: { type: Schema.Types.ObjectId, ref: ModelName.Manager }
});

export default assembleModel<DonationNeedModel>(ModelName.DonationNeed, DonationNeedSchema);
