import { Box, CircularProgress, Fade, Grow, Typography } from "@mui/material";
import { Logo } from "./SVG.tsx";
import { useContext, useMemo } from "react";
import { GlobalContext } from "../store/global.tsx";

const Unsplash = () => {
  const { model } = useContext(GlobalContext);

  const className = useMemo(() => {
    if (model === "dark") {
      return "bg-gradient-to-br from-[#ad5389] to-[#3c1053] flex flex-col justify-center items-center gap-8";
    }
    return "bg-gradient-to-br from-white to-[#9D50BB] flex flex-col justify-center items-center gap-8";
  }, [model]);

  return (
    <Fade in timeout={300}>
      <Box className={`w-screen h-screen ${className}`}>
        <Grow in timeout={500}>
          <Box className="flex flex-col justify-center items-center gap-3">
            <Logo
              style={{
                width: "4rem",
                height: "auto",
              }}
              color="white"
            />
            <Typography
              className="select-none text-shadow-lg"
              fontFamily="Poppins"
              fontSize="2rem"
              color="white"
              fontWeight="800"
            >
              INSTANCE AI
            </Typography>
          </Box>
        </Grow>

        <CircularProgress color={model === "dark" ? "secondary" : "primary"} />
      </Box>
    </Fade>
  );
};

export default Unsplash;
