
import { Schema } from "mongoose";
import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";
import { UserSchema, UserModel } from "./User";

export interface GiverModel extends UserModel {

}

const GiverSchema = UserSchema;
GiverSchema.add({

});

export default assembleModel<GiverModel>(ModelName.Giver, GiverSchema);
