
import { Schema, Document } from "mongoose";
import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";
import { GiverModel } from "./Giver";

export interface DonationModel extends Document {
  date: Date;
  description: string;
  giver: GiverModel;
}

const DonationSchema = new Schema({
  date: { type: Date },
  description: { type: String },
  giver: { type: Schema.Types.ObjectId, ref: ModelName.Giver }
});

export default assembleModel<DonationModel>(ModelName.Donation, DonationSchema);
