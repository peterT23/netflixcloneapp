import React from "react";
import { Box } from "@mui/material";

function TrailerDisplay({ trailer, src }) {
  return (
    <Box
      component="div"
      sx={[
        { margin: " 5% auto" },
        (theme) => ({
          [theme.breakpoints.down("sm")]: {
            marginTop: "35%",
          },
        }),
      ]}
    >
      <iframe
        title={trailer.key}
        width="1280"
        height="720"
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Box>
  );
}

export default TrailerDisplay;
