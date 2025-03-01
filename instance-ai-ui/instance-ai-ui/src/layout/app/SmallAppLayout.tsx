import { Outlet } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction} from "@mui/material";

const SmallAppLayout = () => {
    return (
        <div>
            <div>Header</div>

            <div>
                <Outlet />
            </div>

            <BottomNavigation showLabels>
                <BottomNavigationAction label="Recents" />
                <BottomNavigationAction label="Favorites" />
                <BottomNavigationAction label="Nearby" />
            </BottomNavigation>
        </div>
    )
};

export default SmallAppLayout;