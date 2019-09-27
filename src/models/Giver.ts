import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";
import { UserModel, UserSchema } from "./User";

export interface GiverModel extends UserModel { }

const GiverSchema = UserSchema;
GiverSchema.add({

});

export default assembleModel<GiverModel>(ModelName.Giver, GiverSchema);
