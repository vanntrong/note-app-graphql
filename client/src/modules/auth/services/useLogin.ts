import { gql } from "@apollo/client/core";
import { useMutation } from "@apollo/client/react/hooks";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../../configs/firebase";
import { useAuthContext } from "../../../contexts/auth.context";
import { setCookie } from "../../../utils/cookies";
import { useEffect } from "react";

const REGISTER = gql`
  mutation Register(
    $displayName: String!
    $email: String!
    $avatar: String!
    $uid: String!
  ) {
    register(
      displayName: $displayName
      email: $email
      avatar: $avatar
      uid: $uid
    ) {
      _id
      displayName
      avatar
      uid
    }
  }
`;

interface RegisterResponse {
  register: {
    avatar: string;
    displayName: string;
    __typename: string;
    _id: string;
    uid: string;
  };
}

const useLogin = () => {
  const [register, { loading, data, error }] =
    useMutation<RegisterResponse>(REGISTER);

  const { setUser } = useAuthContext();

  const loginGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);
    result.user.getIdToken().then((token) => {
      setCookie("token", token);
    });

    const {
      user: { uid, displayName, photoURL, email },
    } = result;

    register({
      variables: {
        displayName,
        uid,
        avatar: photoURL,
        email,
      },
    });
  };

  useEffect(() => {
    if (data) {
      const {
        register: { __typename, ...user },
      } = data;
      setUser(user);
    }
  }, [data]);

  return {
    loginGoogle,
    loading,
    data,
    error,
  };
};

export default useLogin;
