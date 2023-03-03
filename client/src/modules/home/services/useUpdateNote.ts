import { gql, useMutation } from "@apollo/client";
import { BaseServiceOptions } from "../../../types/common";

const UPDATE_NOTE = gql`
  mutation UpdateNoteContent($noteId: String!, $content: String!) {
    updateNoteContent(noteId: $noteId, content: $content) {
      content
    }
  }
`;

const useUpdateNodeContent = (options?: BaseServiceOptions) => {
  const [updateNoteContent, { data, loading, error }] = useMutation(
    UPDATE_NOTE,
    {
      onCompleted: () => {
        options?.onSuccess?.();
      },
    }
  );

  return {
    updateNoteContent,
    data,
    loading,
    error,
  };
};

export default useUpdateNodeContent;
