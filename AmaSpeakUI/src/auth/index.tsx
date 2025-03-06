import { Outlet, Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = (props: React.PropsWithChildren<{}>) => {

    const token = localStorage.getItem("AUTH_TOKEN");
    const location = useLocation();

    if (!token) {
        if (location.pathname === "/login") {
            return <>{props.children}</>;
        } 
    
        if (location.pathname === "/app") {
            return <Navigate to="/login" />;
        }

        return <>{props.children}</>;

    }

    return <Navigate to="/app" />;
};

export default PrivateRoute;