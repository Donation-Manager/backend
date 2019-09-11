import { Model, SaveOptions, Document } from "mongoose";

export interface TypedMongooseModel<T extends Document, QueryHelpers = {}> extends Omit<Model<T>, 'new'> {
  new(obj?: Partial<T>): T
  create(docs: T[], callback?: (err: any, res: T[]) => void): Promise<T[]>;
  create(docs: T[], options?: SaveOptions, callback?: (err: any, res: T[]) => void): Promise<T[]>;
  create(...docs: T[]): Promise<T>;
  create(...docsWithCallback: T[]): Promise<T>;
}
