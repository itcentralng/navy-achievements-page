/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import navylogo from "../assets/navylogo.svg";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: "1rem",
                color: "#fff",
                fontFamily: "'Lato', sans-serif",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                NAVY ACHIEVEMENTS
              </Link>
            </Typography>
            <img src={navylogo} alt="" style={{ width: "3.5rem" }} />
          </Box>
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default Header;
