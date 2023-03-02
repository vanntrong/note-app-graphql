import { ObjectId } from "mongodb";
import NoteCollection from "./note.model";

export class NoteService {
  async getAll(folderId: string) {
    return NoteCollection.find({
      folder: new ObjectId(folderId),
    })
      .sort({ createdAt: -1 })
      .toArray();
  }

  async getOne(noteId: string, folderId: string) {
    return NoteCollection.findOne({
      _id: new ObjectId(noteId),
      folder: new ObjectId(folderId),
    });
  }

  async create(content: string, folderId: string) {
    const note = {
      content,
      folder: new ObjectId(folderId),
      createdAt: new Date(),
      updatedAt: null,
    };

    const { insertedId } = await NoteCollection.insertOne(note);
    return this.getOne(insertedId.toString(), folderId);
  }

  async updateContent(noteId: string, content: string) {
    const { value } = await NoteCollection.findOneAndUpdate(
      {
        _id: new ObjectId(noteId),
      },
      {
        $set: {
          content,
          updatedAt: new Date(),
        },
      }
    );

    return value;
  }
}
