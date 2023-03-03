import { gql, useQuery } from "@apollo/client";
import { Folder } from "../../../interfaces/folder.interface";

export const GET_FOLDER = gql`
  query Folder($folderId: String!) {
    folder(folderId: $folderId) {
      _id
      name
      notes {
        _id
        content
        createdAt
      }
    }
  }
`;

interface GetFolderResponse {
  folder: Folder;
}

const useGetFolder = ({ folderId }: { folderId?: string }) => {
  const { data, loading, error, refetch } = useQuery<GetFolderResponse>(
    GET_FOLDER,
    {
      skip: !folderId,
      variables: {
        folderId,
      },
    }
  );

  return {
    data,
    loading,
    error,
    refetch,
  };
};

export default useGetFolder;
