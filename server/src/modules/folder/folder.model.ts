import db from "@/loaders/db.loader";
import { Folder } from "./folder.interface";

const FolderCollection = db.collection<Folder>("folders");
FolderCollection.createIndex({ name: 1 }, { unique: true });
export default FolderCollection;
