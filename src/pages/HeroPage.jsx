/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Typography } from "@mui/material";
import "@splidejs/react-splide/css";
import Header from "../components/Header";
import Transition from "../components/transition";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import helicopter from "../assets/helicopter.svg";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useState } from "react";

const HeroPage = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Box>
      <Header>
        <Button sx={{ cursor: "auto" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "82vh",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "93%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{ marginTop: "5em" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "2.7rem",
                    color: "#D1C62A",
                    textAlign: "center",
                    fontWeight: 300,
                    textTransform: "uppercase",
                  }}
                >
                  THe achievements of the nigerian navy commands
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontSize: "1.4rem",
                    textAlign: "center",
                    textTransform: "capitalize",
                    marginTop: "1.2em",
                  }}
                >
                  “From successful maritime operations to humanitarian missions,
                  our naval forces continue to uphold the highest standards of
                  professionalism and excellence."
                </Typography>
              </Box>
              <Box sx={{ marginTop: "2em" }}>
                <Splide
                  options={{
                    type: "loop",
                    arrows: false,
                    pagination: false,
                    direction: "ltr",
                    perPage: 2,
                    gap: "2em",
                    autoScroll: {
                      pauseOnHover: true,
                      rewind: false,
                      speed: 1,
                      autoStart: true,
                    },
                  }}
                  extensions={{ AutoScroll }}
                >
                  <SplideSlide>
                    <Box
                      sx={{
                        display: "flex",
                        backgroundColor: "transparent",
                        justifyContent: "space-around",
                      }}
                    >
                      <img
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          marginLeft: "1em",

                          width: "70%",
                        }}
                        src={helicopter}
                        alt=""
                      />
                    </Box>
                  </SplideSlide>
                </Splide>
              </Box>
            </Box>
          </Box>
        </Button>
      </Header>
    </Box>
  );
};

export default Transition(HeroPage);
