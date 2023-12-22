import backgroundImage from "./assets/BackgroundImg.svg";
import { Box } from "@mui/material";
import HeroPage from "./pages/HeroPage";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        paddingTop: "2em",
      }}
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HeroPage />} />
        </Routes>
      </AnimatePresence>
    </Box>
  );
}

export default App;
