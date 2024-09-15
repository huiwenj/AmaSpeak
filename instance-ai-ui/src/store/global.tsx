import React, { createContext, FC } from "react";
import { useLocalStorageState } from "ahooks";

interface GlobalContextType {
  model?: string;
  setModel: (model: string) => void;
}

interface IProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext<GlobalContextType>({
  model: "light",
  setModel: () => {},
});

export const GlobalProvider: FC<IProps> = ({ children }) => {
  const [model, setModel] = useLocalStorageState<string>("instance-ui-model", {
    defaultValue: "dark",
    listenStorageChange: true,
  });

  return (
    <GlobalContext.Provider
      value={{
        model,
        setModel,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
