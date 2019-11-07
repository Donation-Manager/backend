import { DonationItemModel } from "../models/DonationItem";
import { DonationItemService } from "../services/DonationItemService";

export class DonationItemsMockData {

  private service: DonationItemService;

  public async initMockData(): Promise<void> {
    this.service = new DonationItemService();
    const donationItems = this.getMockData();
    donationItems.forEach(async (donationItem) => {
      console.log(donationItem);
      console.log(`Encontrou? ${await this.isDonationItemAlreadyCreated(donationItem)}`);
      if (!await this.isDonationItemAlreadyCreated(donationItem)) {
        this.service.saveDonationItem(donationItem);
      }
    });
  }

  private async isDonationItemAlreadyCreated(donationItem: Partial<DonationItemModel>): Promise<boolean> {
    return Boolean(await this.service.getDonationItemByName(donationItem.itemName));
  }

  private getMockData(): Array<Partial<DonationItemModel>> {
    return [
      {
        itemName: "Feijão",
        itemDescription: "",
        itemUOM: "Kg"
      },
      {
        itemName: "Arroz",
        itemDescription: "",
        itemUOM: "Kg"
      },
      {
        itemName: "Calçados",
        itemDescription: "",
        itemUOM: "pares"
      },
      {
        itemName: "Agasalho",
        itemDescription: "",
        itemUOM: "pçs"
      },
      {
        itemName: "Cama",
        itemDescription: "",
        itemUOM: "pçs"
      }
    ];
  }
}
