import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client/react/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BaseServiceOptions } from "../../../types/common";
import { removeCookie } from "../../../utils/cookies";

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

const useGetMe = (options?: BaseServiceOptions) => {
  const { data, loading, error } = useQuery<GetMeResponse>(GET_ME, {
    skip: options?.skip,
  });

  useEffect(() => {
    if (error) {
      removeCookie("token");
      window.location.href = "/login";
    }
  }, [error]);

  return {
    loading,
    error,
    data,
  };
};

export default useGetMe;
