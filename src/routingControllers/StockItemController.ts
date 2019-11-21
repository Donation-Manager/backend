import * as express from "express";
import { RoutingController } from "./abstractRoutingController/RoutingController";
import StockItem from "../models/StockItem";
import { StockItemService } from "../services/StockItemService";
import { ManagerService } from "../services/ManagerService";

export class StockItemController extends RoutingController {

  protected assembleRoutes(): void {
    this.router.get("/stockItems", this.getAllStockItems);
    this.router.get("/stockItemById", this.getStockItemById);
    this.router.post("/createStockItem", this.createStockItem);
    this.router.post("/deleteStockItemById", this.deleteStockItemById);
  }

  public async getAllStockItems(req: express.Request, res: express.Response): Promise<void> {
    const stockItems = await StockItem.find({}).populate("manager").populate("donationItem");
    res.json(stockItems);
  }

  public async createStockItem(req: express.Request, res: express.Response): Promise<void> {
    console.log(req.body);

    const stockItem = req.body;

    const newStockItem = await new StockItemService().saveStockItem(
      stockItem,
      await ManagerService.getLoggedManager()
    );
    res.json(newStockItem);
  }

  public async getStockItemById(req: express.Request, res: express.Response): Promise<void> {
    const id = req.param("stockItemId");
    console.log(`id: ${id}`);
    const stockItem = await new StockItemService().getStockItemById(id);
    res.json(stockItem);
  }

  public async deleteStockItemById(req: express.Request, res: express.Response): Promise<void> {
    const stockItemId = req.body.stockItemId;
    if (stockItemId) {
      const response = await new StockItemService().deleteStockItemById(stockItemId);
      res.json(response);
    }
  }

}
