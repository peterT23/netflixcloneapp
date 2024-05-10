import React from "react";
import { Box, IconButton, CardMedia, Stack, Typography } from "@mui/material";

// import { useState } from "react";
// import VolumeOffIcon from "@mui/icons-material/VolumeOff";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";
// import Logo from "../layout/Logo";

function VideoDisplay({ trailer, src }) {
  // const [mute, setMute] = useState(true);
  // console.log(src);
  // const handleClick = () => {
  //   setMute((mute) => !mute);
  // };
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
      {/* <CardMedia
        sx={[
          {
            width: "100vw",
            height: "auto",
            marginTop: "80px",
            boxShadow: "-3px 5px 30px 30px #000",
            p: "0",
          },
          (theme) => ({
            [theme.breakpoints.down("sm")]: {
              marginTop: "170px",
            },
          }),
        ]}
        component="video"
        className="classed"
        title="Video"
        src={src}
        muted={mute}
        autoPlay
        controls
        loop
        allowFullScreen
      /> */}
      <iframe
        width="1280"
        height="720"
        src={src}
        title="Unfrosted | Official Trailer | Netflix"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
      {/* <Box
        sx={{
          position: "absolute",
          mt: "200px",
          padding: "2em",
          top: "0",
          bottom: "0",
          right: "0",
          left: "0",

          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <Stack
          spacing={2}
          direction="column"
          sx={[
            {
              color: "white",
              fontFamily: "Arial",
              fontWeight: "bold",
            },
            (theme) => ({
              [theme.breakpoints.down("sm")]: { fontSize: "20px" },
            }),
          ]}
        >
          <Logo />
          <Typography
            variant="h2"
            sx={[
              {
                color: "white",
                fontFamily: "Arial",
                fontWeight: "bold",
              },
              (theme) => ({
                [theme.breakpoints.down("sm")]: {
                  fontSize: "40px",
                  p: "20px",
                },
              }),
            ]}
          >
            {trailer.name}
          </Typography>
        </Stack>

        <IconButton
          onClick={handleClick}
          sx={[
            {
              color: "white",

              "&:hover": { bgcolor: "white", color: "black" },
            },
          ]}
        >
          {mute ? (
            <VolumeOffIcon
              sx={[
                { width: "40px", height: "40px" },
                (theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    width: "25px",
                    height: "25px",
                  },
                }),
              ]}
            />
          ) : (
            <VolumeUpIcon
              sx={[
                { width: "40px", height: "40px" },
                (theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    width: "25px",
                    height: "25px",
                  },
                }),
              ]}
            />
          )}
        </IconButton>
      </Box> */}
    </Box>
  );
}

export default VideoDisplay;
