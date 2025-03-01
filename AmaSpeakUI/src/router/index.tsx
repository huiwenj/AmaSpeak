import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home";
import HomeLayout from "../layout/HomeLayout.tsx";
import Login from "../views/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    "path":"/login",
    "element":<Login/>, // 组件html标签的形式来写
  },
    // login page从homelayout移除之后，就会使用默认layout，打开之后也不会出现header
  {
    path: "app",
    children: [
      {
        path: "dashboard",
        element: <div>Dashboard</div>,
      },
    ],
  },
]);

export default router;
