import { UserService } from "./UserService";
import Giver, { GiverModel } from "../models/Giver";

export class GiverService {

  public static async getLoggedGiver(): Promise<GiverModel> {
    return this.getDummyGiver();
  }

  private static async getDummyGiver(): Promise<GiverModel> {
    let giver = await Giver.findOne({ email: "carlosdasilva@gmail.com" });

    if (!giver) {
      const newGiver = new Giver({
        name: "Carlos da Silva",
        email: "carlosdasilva@gmail.com",
        dateOfBirth: new Date(),
        cpf: "2545245",
        donationCount: 3
      });
      giver = await newGiver.save();
    }

    return giver;
  }
}
