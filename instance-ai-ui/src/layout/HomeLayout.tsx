import { FC, useContext } from "react";
import { AppBar, Box, Container, IconButton, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Logo } from "../components/SVG.tsx";
import ContrastIcon from "@mui/icons-material/Contrast";
import { GlobalContext } from "../store/global.tsx";

const HomeLayout: FC = () => {
  const { model, setModel } = useContext(GlobalContext);

  const handleToggleTheme = () => {
    setModel(model === "light" ? "dark" : "light");
  };

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Box className="flex justify-between px-4 py-3 place-items-center">
          <Box className="flex justify-between place-items-center gap-3">
            <Logo
              style={{
                width: "3rem",
                height: "auto",
              }}
              color="white"
            />
            <Typography
              className="select-none"
              fontFamily="Poppins"
              fontSize="1.2rem"
              color="white"
              fontWeight="800"
            >
              INSTANCE AI
            </Typography>
          </Box>

          <IconButton
            sx={{
              color: "white",
            }}
            onClick={handleToggleTheme}
          >
            <ContrastIcon />
          </IconButton>
        </Box>
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default HomeLayout;
