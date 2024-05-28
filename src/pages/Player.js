import React, { useEffect } from "react";

import TrailerDisplay from "../layout/TrailerDisplay";
import { useState } from "react";
import apiService from "../app/apiService";
import { useParams } from "react-router-dom";
import { BEARER } from "../app/config";

const Player = () => {
  const paramId = useParams();
  console.log("trailer param", paramId);

  console.log("paramsID", paramId);
  const [trailerData, setTrailerData] = useState([]);
  const getTrailer = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: BEARER,
      },
    };
    try {
      const response = await apiService.get(
        `/movie/${paramId.id}/videos`,
        options
      );

      setTrailerData(response.data.results);
    } catch (error) {
      console.log("get detail movies fail");
    }
  };

  useEffect(() => {
    getTrailer();
    // eslint-disable-next-line
  }, []);

  // const trailerArr = trailerData.filter(
  //   (trailer) => trailer.name === "Official Trailer"
  // );
  // console.log("trailerArr ", trailerArr);
  return (
    <>
      {trailerData.map(
        (trailer, index) =>
          trailer.type === "Trailer" && (
            <TrailerDisplay
              key={index}
              trailer={trailer}
              src={`https://www.youtube.com/embed/${trailer.key}`}
            />
          )
      )}
    </>
  );
};

export default Player;
