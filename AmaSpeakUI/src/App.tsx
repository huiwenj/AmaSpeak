import "./App.css";
import router from "./router";
import { RouterProvider, useNavigate } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "./hooks/theme.ts";
import { useEffect, useState } from "react";

function App() {
  const [theme] = useTheme();

  // useEffect(() => {
  //   const token = localStorage.getItem("AUTH_TOKEN");
  //   if (token) {
  //     window.location.href = "/login";
  //   }
  // }, []);

  // useState();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
