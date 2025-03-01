import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const token: string | null = localStorage.getItem("AUTH_TOKEN");
    const location = useLocation();

    // 未登录且当前路径需要保护
    if (!token && location.pathname !== "/login") {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // 已登录但访问登录页
    if (token && location.pathname === "/login") {
        return <Navigate to="/app" replace />;
    }

    // 其他情况正常渲染
    return children;
};

export default PrivateRoute;

// import {Navigate, useLocation} from "react-router-dom"
//
// // 有html就是tsx file
//
// const PrivateRoute = (props) => {
//
//     const token = localStorage.getItem("AUTH_TOKEN");
//     const location = useLocation();
//
//     if(!token) {
//         if(location.pathname === "/login") {
//             return <>{props.children}</>;
//         }
//
//         if(location.pathname === "/app") {
//             return <Navigate to="/login" />;
//         }
//         return <>{props.children}</>;
//     }
//     return <Navigate to="/app" />;
// };
//
// export default PrivateRoute;