import { gql, useMutation } from "@apollo/client";

const UPDATE_NOTE = gql`
  mutation UpdateNoteContent($noteId: String!, $content: String!) {
    updateNoteContent(noteId: $noteId, content: $content) {
      content
    }
  }
`;

const useUpdateNodeContent = () => {
  const [updateNoteContent, { data, loading, error }] =
    useMutation(UPDATE_NOTE);

  return {
    updateNoteContent,
    data,
    loading,
    error,
  };
};

export default useUpdateNodeContent;
