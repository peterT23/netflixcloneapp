import React from "react";
import { CardMedia, CardActionArea, Card } from "@mui/material";
import video from "../Atlas.mp4";
const MoviePage = () => {
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia
            component="video"
            className="classed"
            sx={{ width: 1000 }}
            title="Video"
            src={video}
            autoPlay
          />
        </CardActionArea>
      </Card>
    </div>
  );
};

export default MoviePage;
