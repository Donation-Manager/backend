
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
}

const DonationIntentionSchema = new Schema({
  collectFromGiver: { type: Boolean },
  collectDate: { type: Date },
  description: { type: String },
  giver: { type: Schema.Types.ObjectId, ref: ModelName.Giver },
  donationNeed: { type: Schema.Types.ObjectId, ref: ModelName.DonationNeed }
});

export default assembleModel<DonationIntentionModel>(ModelName.DonationIntention, DonationIntentionSchema);
