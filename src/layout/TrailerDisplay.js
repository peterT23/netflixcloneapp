import React from "react";
import { Box } from "@mui/material";

function VideoDisplay({ trailer, src }) {
  return (
    <Box
      component="div"
      sx={[
        { marginTop: "5%" },
        (theme) => ({
          [theme.breakpoints.down("sm")]: {
            marginTop: "35%",
          },
        }),
      ]}
    >
      <iframe
        width="1280"
        height="720"
        src={src}
        title="Unfrosted | Official Trailer | Netflix"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </Box>
  );
}

export default VideoDisplay;
