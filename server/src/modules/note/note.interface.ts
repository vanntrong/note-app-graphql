import { ObjectId } from "mongodb";

export interface Note {
  content: string;
  folder: ObjectId | string;
  createdAt: Date;
  updatedAt: Date | null;
}
