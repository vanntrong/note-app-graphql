import { gql, useMutation } from "@apollo/client";
import { Folder } from "../../../interfaces/folder.interface";
import { GET_ALL_FOLDERS } from "./useGetAllFolders";

const ADD_FOLDER = gql`
  mutation CreateFolder($name: String!) {
    createFolder(name: $name) {
      _id
      name
    }
  }
`;

interface AddFolderResponse {
  createFolder: Folder;
}

const useAddFolder = () => {
  const [addFolder, { data, loading, error }] = useMutation<AddFolderResponse>(
    ADD_FOLDER,
    {
      refetchQueries: [
        {
          query: GET_ALL_FOLDERS,
        },
      ],
    }
  );

  return {
    addFolder,
    data,
    loading,
    error,
  };
};

export default useAddFolder;
