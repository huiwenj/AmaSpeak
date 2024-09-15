import "./App.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import lightTheme from "./theme/light";
import darkTheme from "./theme/dark";
import { GlobalContext } from "./store/global.tsx";
import { useContext, useEffect, useMemo, useState } from "react";
import Unsplash from "./components/Unsplash.tsx";

function App() {
  const { model } = useContext(GlobalContext);
  const [loading, setLoading] = useState<boolean>(true);

  const theme = useMemo(
    () => (model === "light" ? lightTheme : darkTheme),
    [model],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? <Unsplash /> : <RouterProvider router={router} />}
    </ThemeProvider>
  );
}

export default App;
