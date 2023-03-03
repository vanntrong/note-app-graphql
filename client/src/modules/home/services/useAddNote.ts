import { gql, useMutation } from "@apollo/client";
import { BaseServiceOptions } from "../../../types/common";
import { GET_FOLDER } from "./useGetFolder";

const ADD_NOTE = gql`
  mutation AddNote($content: String!, $folderId: String!) {
    addNote(content: $content, folderId: $folderId) {
      content
      createdAt
      _id
    }
  }
`;

const useAddNote = (options?: BaseServiceOptions) => {
  const [addNote, { data, loading, error }] = useMutation(ADD_NOTE, {
    onCompleted: () => {
      options?.onSuccess?.();
    },
  });

  return {
    addNote,
    data,
    loading,
    error,
  };
};

export default useAddNote;
