
import { Schema, Document } from "mongoose";
import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";

export interface DonationModel extends Document {
  date: Date
  description: string;
}

const DonationSchema = new Schema({
  date: { type: Date },
  description: { type: String }
});

export default assembleModel<DonationModel>(ModelName.Donation, DonationSchema);
