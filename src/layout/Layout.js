import React from "react";
import { Box } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
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
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
