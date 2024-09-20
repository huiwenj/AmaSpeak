import { FC, useRef } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { Logo } from "../components/SVG.tsx";
import ContrastIcon from "@mui/icons-material/Contrast";
import { useSize } from "ahooks";
import { useTheme } from "../hooks/theme.ts";

const HomeLayout: FC = () => {
  const [_, setModel, model] = useTheme();

  const appBarRef = useRef<HTMLDivElement>(null);
  const size = useSize(appBarRef);

  const handleToggleTheme = () => {
    setModel(model === "light" ? "dark" : "light");
  };

  return (
    <>
      <AppBar
        elevation={0}
        className="p-4"
        sx={{
          backgroundColor: "transparent",
        }}
        position="fixed"
        ref={appBarRef}
      >
        <Container
          className="flex justify-between py-3 place-items-center bg-[rgba(139,93,232,0.79)] dark:bg-[rgba(12,13,15,.4)] backdrop-blur-sm
        rounded-2xl dark:border dark:border-zinc-700 shadow"
        >
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

          <Box className="flex justify-between place-items-center gap-4">
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
              }}
            >
              Login
            </Button>
            <IconButton
              sx={{
                color: "white",
              }}
              onClick={handleToggleTheme}
            >
              <ContrastIcon />
            </IconButton>
          </Box>
        </Container>
      </AppBar>

      <Container
        className="px-0"
        style={{ marginTop: (size?.height ?? 0) || 0 }}
      >
        <Outlet />
      </Container>

      <Box className="h-[10vh]"></Box>
    </>
  );
};

export default HomeLayout;
