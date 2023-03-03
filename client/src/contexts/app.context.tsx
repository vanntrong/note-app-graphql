import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { Folder } from "../interfaces/folder.interface";

interface AppContextProps {
  folders: Folder[];
  setFolders: (folders: Folder[]) => void;
}

export const AppContext = createContext<AppContextProps>({
  folders: [],
  setFolders: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [folders, setFolders] = useState<Folder[]>([]);

  return (
    <AppContext.Provider value={{ folders, setFolders }}>
      {children}
    </AppContext.Provider>
  );
};
