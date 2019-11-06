import { ModelName } from "./definitions/Model";
import { assembleModel } from "./definitions/ModelAssembler";
import { UserModel, UserSchema } from "./User";

export interface ManagerModel extends UserModel {
  name: string;
}

const ManagerSchema = UserSchema;
ManagerSchema.add({
  name: String
});

export default assembleModel<ManagerModel>(ModelName.Manager, ManagerSchema);
