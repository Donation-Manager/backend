import { UserService } from "./UserService";
import Manager, { ManagerModel } from "../models/Manager";

export class ManagerService {

  public static async getLoggedManager(): Promise<ManagerModel> {
    return this.getDummyManager();
  }

  private static async getDummyManager(): Promise<ManagerModel> {
    let manager = await Manager.findOne({ email: "carlamachado@gmail.com" });

    if (!manager) {
      const newManager = new Manager({
        name: "Carla Machado",
        email: "carlamachado@gmail.com",
        dateOfBirth: new Date(),
        cpf: "64563422"
      });
      manager = await newManager.save();
    }

    return manager;
  }
}
