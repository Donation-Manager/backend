import app from "./App";
import { MongoDBConnection } from "./database/MongoDBConnection";
import { DonationItemsMockData } from "./mockdata/DonationItemsMockData";
const PORT = 4000;

app.removeAllListeners();
app.listen(PORT, async () => {
  console.log("Express server listening on port " + PORT);
  MongoDBConnection.getInstance().connect();
  await new DonationItemsMockData().initMockData();
});
