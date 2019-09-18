
import { Schema, Document } from "mongoose";
import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";
import { UserModel } from "./User";
import { AddressModel } from "./Address";

export interface UserAddressModel extends Document {
  user: UserModel;
  address: AddressModel;
}

const UserAddressSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: ModelName.User },
  address: { type: Schema.Types.ObjectId, ref: ModelName.Address }
});

export default assembleModel<UserAddressModel>(ModelName.UserAddress, UserAddressSchema);
