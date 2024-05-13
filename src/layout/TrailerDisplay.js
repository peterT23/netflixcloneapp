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
{
  /* <iframe width="1761" height="991" src="https://www.youtube.com/embed/UtbpB8_0qvI" title="Nastya cố gắng làm y tá cho động vật quý hiếm. Nastya và những câu chuyện với động vật" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */
}
