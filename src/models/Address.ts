
import { Schema, Document } from "mongoose";
import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";

export interface AddressModel extends Document {
  street: string;
  number: string;
  destrict: string;
  city: string;
  country: string;
  cep: string;
}

const AddressSchema = new Schema({
  street: { type: String },
  number: { type: String },
  destrict: { type: String },
  city: { type: String },
  country: { type: String, default: "Brasil" },
  cep: { type: String }
});

export default assembleModel<AddressModel>(ModelName.Address, AddressSchema);
