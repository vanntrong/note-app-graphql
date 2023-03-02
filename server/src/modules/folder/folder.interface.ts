import { ObjectId } from "mongodb";

export interface Folder {
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date | null;
  author: ObjectId | string;
}
