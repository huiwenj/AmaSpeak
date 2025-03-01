import "./App.css";
import router from "./router";
import { RouterProvider, useNavigate } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "./hooks/theme.ts";
import { useState, useEffect } from "react";

function App() {
  const [theme] = useTheme();
  const nav = useNavigate();

  // useEffect(()=>{
  //     const token = localStorage.getItem("AUTH_TOKEN")
  //     if(!token) {
  //         window.location.href = "/login";
  //     }
  //   }, [nav])

    const token = localStorage.getItem("AUTH_TOKEN")
    useEffect(() => {
        if (!token) {
            nav("/login");
        }
    }, [nav, token]);

  useState();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
