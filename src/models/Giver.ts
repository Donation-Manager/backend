
import { Schema } from "mongoose";
import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";
import { UserSchema, UserModel } from "./User";
import { DonationModel } from "./Donation";

export interface GiverModel extends UserModel {
  teste: string;
  donations: DonationModel[];
}

const GiverSchema = UserSchema;
GiverSchema.add({
  donations: [{ type: Schema.Types.ObjectId, ref: ModelName.Donation }]
});

export default assembleModel<GiverModel>(ModelName.Giver, GiverSchema);
