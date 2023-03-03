import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useAppContext } from "../../../contexts/app.context";
import { Folder } from "../../../interfaces/folder.interface";
import { BaseServiceOptions } from "../../../types/common";

export const GET_ALL_FOLDERS = gql`
  query Folders {
    folders {
      name
      _id
    }
  }
`;

interface GetAllFoldersResponse {
  folders: Folder[];
}

const useGetAllFolders = (options?: BaseServiceOptions) => {
  const { data, loading, error } =
    useQuery<GetAllFoldersResponse>(GET_ALL_FOLDERS);
  const { setFolders } = useAppContext();

  useEffect(() => {
    if (data) {
      setFolders(data.folders);
    }
  }, [data]);

  return {
    data,
    loading,
    error,
  };
};

export default useGetAllFolders;
