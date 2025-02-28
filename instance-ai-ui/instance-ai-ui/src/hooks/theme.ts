import { useContext, useEffect, useMemo } from "react";
import { GlobalContext } from "../store/global.tsx";
import lightTheme from "../theme/light.ts";
import darkTheme from "../theme/dark.ts";
import { Theme } from "@mui/material";

export const useTheme: () => [
  Theme,
  (model: string) => void,
  string | undefined,
] = () => {
  const { model, setModel } = useContext(GlobalContext);

  useEffect(() => {
    if (model === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [model]);

  return [
    useMemo(() => (model === "light" ? lightTheme : darkTheme), [model]),
    setModel,
    model,
  ];
};

export const useMode = () => {
  const { model } = useContext(GlobalContext);
  return model;
};
