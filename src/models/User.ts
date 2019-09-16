
import { Document, Schema } from "mongoose";
import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";

export interface UserModel extends Document {
  name: string;
  cpf: string;
  rg: string;
  email: string;
  dateOfBirth: Date;
  phone: string;
}

export const UserSchema = new Schema({
  name: String,
  cpf: String,
  rg: String,
  email: String,
  dateOfBirth: Date,
  phone: String
});

export default assembleModel<UserModel>(ModelName.User, UserSchema);
