import { FC, useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useMode } from "../../hooks/theme.ts";
import { AestheticFluidBg } from "../../assets/js/AestheticFluidBg.module.js";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ScrollAnimation from "react-animate-on-scroll";
import feedback from "../../assets/feedback.svg";

const Home: FC = () => {
  const model = useMode();

  useEffect(() => {
    if (model === "dark") {
      new AestheticFluidBg({
        dom: "box",
        colors: ["#6341A4", "#0D2570"],
        loop: true,
      });
    } else {
      new AestheticFluidBg({
        dom: "box",
        colors: [
          "#8C88D2",
          "#EBDEA4",
          "#FFFFEF",
          "#F3C7D3",
          "#F0AAEA",
          "#B28BCA",
        ],
        loop: true,
      });
    }
  }, [model]);

  return (
    <>
      <Box className="h-[100vh]">
        <Box className="relative h-[82vh]">
          <Box className="absolute top-1/2 z-10 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
            <Typography
              className="select-none animate__animated animate__fadeInDown animate__delay-500"
              fontFamily="Poppins"
              fontSize="3rem"
              color="white"
              fontWeight="800"
            >
              Real English
            </Typography>
            <Typography
              className="select-none animate__animated animate__fadeInUp animate__delay-800"
              fontFamily="Poppins"
              fontSize="2rem"
              color="#8B5DE8"
              fontWeight="800"
            >
              Immersion
            </Typography>
            <Divider className="my-3 bg-white dark:bg-zinc-600 animate__animated animate__fadeIn animate__delay-1s" />
            <Typography
              fontFamily="Poppins"
              className="select-none animate__animated animate__fadeIn animate__delay-1s"
              color="white"
              fontSize="1.2rem"
            >
              Instance: Speak Like a Native
            </Typography>
          </Box>
          <Box
            className="h-full overflow-hidden rounded-2xl animate__animated animate__fadeIn"
            id="box"
          />
        </Box>
      </Box>

      <ScrollAnimation
        className="animate__animated"
        animateIn="animate__fadeIn"
        animateOnce
      >
        <Box className="flex h-[80vh]">
          <Box className="flex-1 flex flex-col place-items-center place-content-center">
            <ScrollAnimation
              className="animate__animated"
              animateIn="animate__fadeInUp"
              delay={700}
              animateOnce
            >
              <Typography
                fontFamily="Poppins"
                className="select-none animate__delay-1s text-black dark:text-white"
                fontWeight="800"
                fontSize="2rem"
              >
                Speak with Al Companions
              </Typography>
            </ScrollAnimation>

            <ScrollAnimation
              className="animate__animated"
              animateIn="animate__fadeInUp"
              delay={500}
              animateOnce
            >
              <Typography>
                Improve Daily Conversation, Bite-sized, Personalized Lessons
              </Typography>
            </ScrollAnimation>
          </Box>

          <Box className="flex-1 flex place-items-center place-content-center">
            <ScrollAnimation
              animateOnce
              className="animate__animated"
              animateIn="animate__fadeIn"
              delay={300}
            >
              <DotLottieReact
                className="h-80 w-full bg-gray-100 rounded-2xl dark:bg-transparent p-3 shadow-md dark:shadow-none"
                autoplay
                speed={0.4}
                loop
                src={"/lottie/ai.lottie"}
              />
            </ScrollAnimation>
          </Box>
        </Box>
      </ScrollAnimation>

      <ScrollAnimation
        className="animate__animated"
        animateIn="animate__fadeIn"
        animateOnce
      >
        <Box className="flex h-[50vh]">
          <Box className="flex-1 flex place-items-center place-content-center">
            <ScrollAnimation
              animateOnce
              className="animate__animated"
              animateIn="animate__fadeInLeft"
            >
              <img className="h-80" draggable={false} src={feedback} alt="" />
            </ScrollAnimation>
          </Box>
          <Box className="flex-1 flex flex-col place-items-center place-content-center">
            <ScrollAnimation
              className="animate__animated"
              animateIn="animate__fadeInRight"
              animateOnce
            >
              <Typography
                fontFamily="Poppins"
                className="select-none animate__delay-1s text-black dark:text-white"
                fontWeight="800"
                fontSize="2rem"
              >
                Instant Feedback
              </Typography>
            </ScrollAnimation>
          </Box>
        </Box>
      </ScrollAnimation>
    </>
  );
};

export default Home;
