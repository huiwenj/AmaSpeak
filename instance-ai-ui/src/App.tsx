import "./App.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "./hooks/theme.ts";
import { useState } from "react";

function App() {
  const [theme] = useTheme();
  useState();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
