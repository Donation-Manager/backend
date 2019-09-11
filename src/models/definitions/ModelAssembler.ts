import { Schema, model, Document } from "mongoose";
import { TypedMongooseModel } from "./TypedModel";
import { ModelName } from "./Model";

type InvalidModelType<T, K> = T extends null ? "Invalid model type, define the model by calling assembleModel<ModelType>()" : K;

export function assembleModel<T extends Document = null>(
  name: ModelName & InvalidModelType<T, ModelName>,
  schema?: Schema  & InvalidModelType<T, Schema>,
  collection?: string,
  skipInit?: boolean
): TypedMongooseModel<T> {
  return model(name, schema) as TypedMongooseModel<T>;
}
