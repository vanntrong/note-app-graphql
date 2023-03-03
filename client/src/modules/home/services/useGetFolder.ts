import { gql, useQuery } from "@apollo/client";
import { Folder } from "../../../interfaces/folder.interface";
import { BaseServiceOptions } from "../../../types/common";

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

interface UseGetFolderOptions extends BaseServiceOptions {
  folderId?: string;
}

const useGetFolder = ({ folderId }: UseGetFolderOptions) => {
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
