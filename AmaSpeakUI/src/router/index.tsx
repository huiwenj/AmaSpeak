import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home";
import HomeLayout from "../layout/HomeLayout.tsx";
import Login from "../views/login";
import PrivateRoute from "../auth";
import AppLayout from "../layout/app";
import Index from "../views/app/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <PrivateRoute>
      <HomeLayout />
    </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element:(
    <PrivateRoute>
      <Login /> 
    </PrivateRoute>
    ),
  },
    // login page从homelayout移除之后，就会使用默认layout，打开之后也不会出现header
  {
    path: "app",
    //@ts-ignore
    element: <AppLayout />,
    children: [
      {
        path:"",
        element: <Index />
      },
      {
        path: "dashboard",
        element: <div>Dashboard</div>,
      },
    ],
  },
]);

export default router;
