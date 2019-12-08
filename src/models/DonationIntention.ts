
import { Schema, Document } from "mongoose";
import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";
import { GiverModel } from "./Giver";
import { DonationNeedModel } from "./DonationNeed";

export interface DonationIntentionModel extends Document {
  collectFromGiver: boolean;
  collectDate: Date;
  collectHour: Date;
  description: string;
  giver: GiverModel;
  donationNeed: DonationNeedModel;
  quantity: number;
  approved: boolean;
  street: string;
  houseNumber: string;
  city: string;
}

const DonationIntentionSchema = new Schema({
  collectFromGiver: { type: Boolean },
  collectDate: { type: Date },
  collectHour: { type: Date },
  description: { type: String },
  quantity: { type: Number },
  street: { type: String },
  houseNumber: { type: String },
  city: { type: String },
  giver: { type: Schema.Types.ObjectId, ref: ModelName.Giver },
  donationNeed: { type: Schema.Types.ObjectId, ref: ModelName.DonationNeed },
  approved: { type: Boolean }
});

export default assembleModel<DonationIntentionModel>(ModelName.DonationIntention, DonationIntentionSchema);
