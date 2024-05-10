import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import TrailerDisplay from "../layout/TrailerDisplay";
import { useState } from "react";
import apiService from "../app/apiService";
import { useParams } from "react-router-dom";

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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDY4MjBhOTNlYzRkZjZiNThkYTMxN2JmNjUxZDc4YyIsInN1YiI6IjY2MzQ0Y2UyYTFjNTlkMDEyOWU3MjU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ofXLm2NfssGz9jyIfyKGPwLg3ANTHdGjJELR0L3Mr8",
      },
    };
    try {
      const response = await apiService.get(
        `/movie/${paramId.id}/videos`,
        options
      );
      console.log("movie detail response", response.data.results);
      setTrailerData(response.data.results);
    } catch (error) {
      console.log("get detail movies fail");
    }
  };

  useEffect(() => {
    getTrailer();
  }, []);

  return (
    <Layout>
      {trailerData.map(
        (trailer) =>
          trailer.name === "Official Trailer" && (
            <TrailerDisplay
              trailer={trailer}
              src={`https://www.youtube.com/embed/${trailer.key}`}
            />
          )
      )}
    </Layout>
  );
};

export default Player;
