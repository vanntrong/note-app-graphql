import { AppContext } from "@/contexts/app.context";
import { FolderService } from "@/modules/folder/folder.service";
import { NoteService } from "@/modules/note/note.service";
import { UserService } from "@/modules/user/user.service";

const folderService = new FolderService();
const noteService = new NoteService();
const userService = new UserService();

export const resolvers = {
  Query: {
    folders: async (_: unknown, __: unknown, context: AppContext) => {
      const { uid } = context;
      return folderService.getAll(uid);
    },
    folder: async (
      _: unknown,
      args: { folderId: string },
      context: AppContext
    ) => {
      const { uid } = context;
      return folderService.getOne(args.folderId, uid);
    },
    notes: async (_: unknown, args: { folderId: string }) => {
      return noteService.getAll(args.folderId);
    },
    note: async (_: unknown, args: { noteId: string; folderId: string }) => {
      return noteService.getOne(args.noteId, args.folderId);
    },

    me: async (_: unknown, __: unknown, context: AppContext) => {
      if (!context.uid) throw new Error("Unauthorized");
      return userService.getOneByUID(context.uid);
    },
  },

  Mutation: {
    createFolder: async (
      _: unknown,
      args: { name: string; description?: string },
      context: AppContext
    ) => {
      if (!context.uid) throw new Error("Unauthorized");
      return folderService.create(args.name, context.uid, args.description);
    },

    addNote: async (
      _: unknown,
      args: { content: string; folderId: string },
      context: AppContext
    ) => {
      if (!context.uid) throw new Error("Unauthorized");

      return noteService.create(args.content, args.folderId);
    },

    updateNoteContent: async (
      _: unknown,
      args: { noteId: string; content: string }
    ) => {
      return noteService.updateContent(args.noteId, args.content);
    },

    register: async (
      _: unknown,
      args: { displayName: string; email: string; avatar: string; uid: string }
    ) => {
      return userService.register(
        args.displayName,
        args.email,
        args.avatar,
        args.uid
      );
    },
  },
};
