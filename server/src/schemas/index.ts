export const typeDefs = `#graphql
    scalar Date

    type Folder {
        _id:String!
        name:String!
        description:String
        createdAt:Date!
        updatedAt:Date
        author:Author
        notes: [Note]
    }

    type Note {
        _id:String!
        content:String!
        folder:Folder
        createdAt:Date!
        updatedAt:Date
    }

    type Author {
        _id:String!
        displayName:String!
        email:String!
        createdAt:Date!
        updatedAt:Date
        avatar:String
        uid:String!
    }

    type Query {
        folders:[Folder]
        folder(folderId:String!): Folder
        notes:[Note]
        note(noteId:String!): Note
        me:Author
    }

    type Mutation {
        createFolder(name:String!, description:String):Folder
        addNote(content:String!, folderId:String!):Note
        updateNoteContent(noteId:String!, content:String!):Note
        register(displayName:String!, email:String!, avatar:String!, uid:String!):Author    
    }
`;
