/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from "@mui/material";
import "@splidejs/react-splide/css";
import Header from "../components/Header";
import Transition from "../components/transition";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import helicopter from "../assets/helicopter.svg";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const splideRef = useRef(null);

  useEffect(() => {
    const startAutoScroll = setTimeout(() => {
      if (splideRef.current) {
        splideRef.current.splide.go("+1");
        splideRef.current.splide.autoplay.start();
      }
    }, 3000);

    return () => clearTimeout(startAutoScroll);
  }, []);

  return (
    <Box>
      <Header>
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "82vh",
          }}
          onClick={() => setIsVisible(!isVisible)}
          layout
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
            <motion.div sx={{ marginTop: "5em" }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "2.7rem",
                  color: "#D1C62A",
                  textAlign: "center",
                  fontWeight: 300,
                  textTransform: "uppercase",
                  cursor: "text",
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
                  cursor: "text",
                }}
              >
                “From successful maritime operations to humanitarian missions,
                our naval forces continue to uphold the highest standards of
                professionalism and excellence."
              </Typography>
            </motion.div>
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  style={{ marginTop: "2em" }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 1, ease: "backInOut" }}
                >
                  <Splide
                    ref={splideRef}
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
                      },
                    }}
                    extensions={{ AutoScroll }}
                  >
                    <SplideSlide>
                      <motion.div
                        style={{
                          display: "flex",
                          backgroundColor: "transparent",
                          justifyContent: "space-around",
                        }}
                      >
                        <Link
                          to="/achievements"
                          style={{
                            border: "1px solid red",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            style={{
                              height: "20em",
                              marginLeft: "1em",

                              width: "100%",
                            }}
                            src={helicopter}
                            alt=""
                          />
                        </Link>
                      </motion.div>
                    </SplideSlide>
                  </Splide>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </motion.div>
      </Header>
    </Box>
  );
};

export default Transition(HeroPage);
