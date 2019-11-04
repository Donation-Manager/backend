import User, { UserModel } from "../models/User";

export class UserService {

  public static async getLoggedUser(): Promise<UserModel> {
    return await this.getDummyUser();
  }

  private static async getDummyUser(): Promise<UserModel> {
    let user = await User.findOne({ email: "joaodasilva@gmail.com" });

    if (!user) {
      const newUser = new User({
        name: "Joao da Silva",
        email: "joaodasilva@gmail.com",
        dateOfBirth: new Date(),
        cpf: "4312333434"
      });
      user = await newUser.save();
    }

    return user;
  }
}
