
import { Schema, Document } from "mongoose";
import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";

export interface DonationModel extends Document {
  description: string;
}

const DonationSchema = new Schema({
  description: { type: String }
});

export default assembleModel<DonationModel>(ModelName.Donation, DonationSchema);
