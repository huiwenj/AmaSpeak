import React, { createContext, FC, useState } from "react";

interface GlobalContextType {
  model: string;
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
  const [model, setModel] = useState<string>("dark");

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
