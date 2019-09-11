import app from "./App";
import { MongoDBConnection } from "./database/MongoDBConnection";
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
  MongoDBConnection.getInstance().connect();
});