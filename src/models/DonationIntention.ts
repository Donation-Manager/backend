
import { Schema, Document } from "mongoose";
import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";
import { GiverModel } from "./Giver";

export interface DonationIntentionModel extends Document {
  collectFromGiver: boolean;
  collectDate: Date;
  description: string;
  giver: GiverModel;
}

const DonationIntentionSchema = new Schema({
  collectFromGiver: { type: Boolean },
  collectDate: { type: Date },
  description: { type: String },
  giver: { type: Schema.Types.ObjectId, ref: ModelName.Giver }
});

export default assembleModel<DonationIntentionModel>(ModelName.DonationIntention, DonationIntentionSchema);
