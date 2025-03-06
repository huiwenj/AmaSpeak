import Outlet from "@mui/icons-material/Outlet";
import { BottomNavigation, BottomNavigationAction, Box, Typography} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationIcon from "@mui/icons-material/LocationOn";

const SmallAppLayout = () => {

    return (
        <div>
            <div>
                
                <Box className="flex flex-col justify-center items-center gap-2">
                    <img
                        src="/icon.svg"
                        alt="logo"
                        width={60}
                        height={60}
                    />
                    <Typography
                    className="select-none"
                    fontFamily="Poppins"
                    fontSize="1.2rem"
                    fontWeight="800"
                    >
                    INSTANCE AI
                    </Typography>
                </Box>
            </div>
            <div>
                <Outlet/>
            </div>

            <Box className="fixed bottom-2 overflow-hidden px-2 w-full">
                <BottomNavigation showLabels className="bg-[rgba(139,93,232,0.79)] dark:bg-[rgba(12,13,15,.4 rounded-2xl">
                    <BottomNavigationAction label="Friends" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Conversations" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Me" icon={<LocationIcon />} />
                </BottomNavigation>
            </Box>

        </div>
    )
}

export default SmallAppLayout;