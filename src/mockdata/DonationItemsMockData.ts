import DonationItem, { DonationItemModel } from "../models/DonationItem";
import { DonationItemService } from "../services/DonationItemService";
import { StockItemService } from "../services/StockItemService";
import { StockItemModel } from "../models/StockItem";
import DonationIntention, { DonationIntentionModel } from "../models/DonationIntention";

export class DonationItemsMockData {

  private service: StockItemService;

  public async initMockData(): Promise<void> {
    // this.service = new StockItemService();
    //
    // const stockItems = this.getMockData();
    // this.service.deleteAllStockItems();
    // new DonationItemService().deleteAllDonationItems();
    //
    // console.log("MOCKUP STOCK:");
    // stockItems.forEach(async (stockItem) => {
    //   console.log(stockItem);
    //   this.service.saveStockItem(stockItem, null);
    // });
    console.log("passou aqui");
    DonationIntention.deleteMany({ });
  }

  private getMockData(): Array<Partial<any>> {
    return [
      {
        itemQuantity: 50,
        donationItem: {
          itemName: "Feijão",
          itemDescription: "Exemplo de descrição",
          itemUOM: "Kg"
        }
      },
      {
        itemQuantity: 100,
        donationItem: {
          itemName: "Arroz",
          itemDescription: "Exemplo de descrição",
          itemUOM: "Kg"
        }
      },
      {
        itemQuantity: 10,
        donationItem: {
          itemName: "Calçados",
          itemDescription: "Exemplo de descrição",
          itemUOM: "pares"
        }
      },
      {
        itemQuantity: 24,
        donationItem: {
          itemName: "Agasalho",
          itemDescription: "Exemplo de descrição",
          itemUOM: "pçs"
        }
      },
      {
        itemQuantity: 5,
        donationItem: {
          itemName: "Cama",
          itemDescription: "Exemplo de descrição",
          itemUOM: "pçs"
        }
      }
    ];
  }
}
