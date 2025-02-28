import { FC, useRef } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";
import { Logo } from "../components/SVG.tsx";
import ContrastIcon from "@mui/icons-material/Contrast";
import { useSize } from "ahooks";
import { useTheme } from "../hooks/theme.ts";

// 点击跳转功能，放在router对象里面，每一个底下有route
// hook: useNavigate，可以导航到想要去的地方

const HomeLayout: FC = () => {
  const [_, setModel, model] = useTheme();

  const appBarRef = useRef<HTMLDivElement>(null);
  const size = useSize(appBarRef);
  const nav = useNavigate();

  const handleToggleTheme = () => {
    setModel(model === "light" ? "dark" : "light");
  };

  const handleLogin = () => {
    nav("/login")
  }

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
              onClick={handleLogin}
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
          {
              /*outlet很关键，是react router的一个用法，起到占位符的作用。
              * 在router/index 文件里
              * 如果你在一个route（这里是根目录）底下声明了一个element。会默认这个element是一个layout
              * 当有children的时候，它会把children component的任何内容都放到outlet里面去
              *
              * 举个例子来说，有outlet的情况下，就会对homelayout以下的部分进行渲染，不会被覆盖掉
              * 相当于固定住了header。
              * 做login page的时候不需要header，就可以把这部分从children中移除*/
          }
      </Container>

      <Box className="h-[10vh]"></Box>
    </>
  );
};

export default HomeLayout;
