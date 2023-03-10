import FolderCollection from "./folder.model";
import { ObjectId } from "mongodb";

export class FolderService {
  async getAll(authorId?: string) {
    return FolderCollection.find({
      author: authorId,
    })
      .sort({ createdAt: -1 })
      .toArray();
  }

  async getOne(folderId: string, authorId?: string) {
    const folder = await FolderCollection.aggregate([
      {
        $match: {
          $and: [
            {
              _id: new ObjectId(folderId),
            },
            {
              author: authorId,
            },
          ],
        },
      },
      {
        $lookup: {
          from: "notes",
          localField: "_id",
          foreignField: "folder",
          as: "notes",
        },
      },
    ]).toArray();

    return folder[0];
  }

  async create(name: string, authorId: string, description?: string) {
    const folder = {
      name,
      description,
      createdAt: new Date(),
      updatedAt: null,
      author: authorId,
    };

    const { insertedId } = await FolderCollection.insertOne(folder);
    return this.getOne(insertedId.toString(), authorId);
  }
}
