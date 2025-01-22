import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home";
import HomeLayout from "../layout/HomeLayout.tsx";

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
