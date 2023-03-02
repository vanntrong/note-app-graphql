import db from "@/loaders/db.loader";
import { Note } from "./note.interface";

const NoteCollection = db.collection<Note>("notes");
export default NoteCollection;
