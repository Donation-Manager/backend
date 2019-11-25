
import { Schema, Document } from "mongoose";
import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";
import { ManagerModel } from "./Manager";
import { DonationIntentionModel } from "./DonationIntention";

export interface DonationModel extends Document {
  date: Date;
  description: string;
  manager: ManagerModel;
  intention: DonationIntentionModel;
}

const DonationSchema = new Schema({
  date: { type: Date },
  description: { type: String },
  giver: { type: Schema.Types.ObjectId, ref: ModelName.Manager },
  intention: { type: Schema.Types.ObjectId, ref: ModelName.DonationIntention }
});

export default assembleModel<DonationModel>(ModelName.Donation, DonationSchema);
