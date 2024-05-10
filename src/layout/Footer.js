import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Logo from "./Logo";

const content = [
  ["Home", "Contact us", "Term of services", "About us"],
  ["Live", "FAQ", "Premium", "Privacy policy"],
  ["Must watch", "Recent release", "Top IMDB"],
];

function Footer() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto",
        bgcolor: "red",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        backgroundImage:
          "url(https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/0f639013-550a-4d7a-9087-65221ebbe54e/VN-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg)",
      }}
    >
      <Box
        sx={{
          bgcolor: "rgba(0,0,0,0.6)",
          width: "100%",
          height: "100%",
          border: "5px solid rgba(0,0,0,0.9)",
        }}
      >
        <Box
          sx={{
            p: "50px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Container sx={{ width: "300px" }}>
            <Logo />
          </Container>
          {content.map((content, index) => (
            <Container key={`${index}${content}`} sx={{ width: "300px" }}>
              {content.map((typo, index) => (
                <Typography
                  key={index}
                  variant="h3"
                  color="white"
                  sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "1.5rem",
                    },
                  })}
                >
                  {typo}
                </Typography>
              ))}
            </Container>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
