
import { Schema, Document } from "mongoose";
import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";
import { GiverModel } from "./Giver";
import { DonationNeedModel } from "./DonationNeed";

export interface DonationIntentionModel extends Document {
  collectFromGiver: boolean;
  collectDate: Date;
  description: string;
  giver: GiverModel;
  donationNeed: DonationNeedModel;
  quantity: Number;
  approved: boolean;
}

const DonationIntentionSchema = new Schema({
  collectFromGiver: { type: Boolean },
  collectDate: { type: Date },
  description: { type: String },
  quantity: { type: Number },
  giver: { type: Schema.Types.ObjectId, ref: ModelName.Giver },
  donationNeed: { type: Schema.Types.ObjectId, ref: ModelName.DonationNeed },
  approved: { type: Boolean }
});

export default assembleModel<DonationIntentionModel>(ModelName.DonationIntention, DonationIntentionSchema);
