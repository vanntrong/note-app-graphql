import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client/react/hooks";

const GET_ME = gql`
  query Me {
    me {
      _id
      displayName
      avatar
      uid
    }
  }
`;

interface GetMeResponse {
  me: {
    avatar: string;
    displayName: string;
    _id: string;
    uid: string;
  };
}

const useGetMe = ({ skip = false }: { skip?: boolean }) => {
  const { data, loading, error } = useQuery<GetMeResponse>(GET_ME, {
    skip: skip,
  });

  return {
    loading,
    error,
    data,
  };
};

export default useGetMe;
