import { Note } from "./note.interface";

export interface Folder {
  name: string;
  _id: string;
  notes: Note[] | null;
}
