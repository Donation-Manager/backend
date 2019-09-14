import * as mongoose from "mongoose";
import { MongoURI } from "./definitions/MongoDB";

export class MongoDBConnection {
    private static instance: MongoDBConnection;

    private constructor() { }

    public static getInstance() {
        if (!this.instance) {
            return new MongoDBConnection();
        }
        return this.instance;
    }

    public connect() {
        mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection.once("open", () => {
            console.info("Connected to Mongo via Mongoose");
        });
        mongoose.connection.on("error", (err) => {
            console.error("Unable to connect to Mongo via Mongoose", err);
        });
    }
}
