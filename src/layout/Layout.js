import React from "react";
import { Box } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        // margin: "100px",
        width: "100vw",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#111",
      }}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
