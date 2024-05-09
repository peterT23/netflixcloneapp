import { Box } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Logo = ({ disabledLink = false }) => {
  const logo = (
    <Box
      sx={[
        { width: "20px" },
        (theme) => ({
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        }),
      ]}
    >
      <img
        style={{ width: "10em", height: "auto" }}
        src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
        alt="no internet conection"
      />
    </Box>
  );
  if (disabledLink) {
    return <>{logo}</>;
  }
  return <RouterLink to="/">{logo}</RouterLink>;
};

export default Logo;
