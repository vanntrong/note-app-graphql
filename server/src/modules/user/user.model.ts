import db from "@/loaders/db.loader";
import { User } from "./user.interface";

const UserCollection = db.collection<User>("users");
UserCollection.createIndex({ email: 1 }, { unique: true });
export default UserCollection;
