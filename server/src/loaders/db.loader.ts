import { MONGO_DB_NAME } from "@/configs/constants";
import { env } from "@/configs/env";
import { MongoClient } from "mongodb";
const client = new MongoClient(env.mongoURI as string);
const db = client.db(MONGO_DB_NAME);
export default db;
