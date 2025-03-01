import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home";
import HomeLayout from "../layout/HomeLayout.tsx";
import Login from "../views/login";
import PrivateRoute from "../auth";
import AppLayout from "../layout/app"

const router = createBrowserRouter([
  {
    path: "/",
    element:(
        // <PrivateRoute>
          <HomeLayout />
        // </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    "path":"/login",
    "element": (
        <PrivateRoute>
          <Login/>
        </PrivateRoute>
    ), // 组件html标签的形式来写
  },
    // login page从homelayout移除之后，就会使用默认layout，打开之后也不会出现header
  {
      path: "app",
      element: (
          <PrivateRoute>
              <AppLayout />
          </PrivateRoute>
      ),
    children: [
      {
          path: "/",
          element: <div>App</div>,
      },
      {
        path: "dashboard",
        element: <div>Dashboard</div>,
      },
    ],
  },
]);

export default router;
