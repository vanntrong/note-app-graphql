import {
  createContext,
  FC,
  PropsWithChildren,
  useState,
  useContext,
  useEffect,
} from "react";
import { User } from "../interfaces/user.interface";
import useGetMe from "../modules/auth/services/useGetMe";
import { getCookie } from "../utils/cookies";

export interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const token = getCookie("token");
  const { data } = useGetMe({ skip: !token });

  useEffect(() => {
    if (data) {
      setUser(data.me);
    }
  }, [data]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
