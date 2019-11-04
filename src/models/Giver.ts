import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";
import { UserModel, UserSchema } from "./User";

export interface GiverModel extends UserModel {
  donationCount: number;
}

const GiverSchema = UserSchema;
GiverSchema.add({
  donationCount: Number
});

export default assembleModel<GiverModel>(ModelName.Giver, GiverSchema);
