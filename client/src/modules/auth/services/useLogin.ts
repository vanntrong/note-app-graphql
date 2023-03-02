import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../../configs/firebase";

const useLogin = () => {
  const loginGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const {
      user: { uid, displayName },
    } = await signInWithPopup(auth, provider);
  };

  return {
    loginGoogle,
  };
};

export default useLogin;
