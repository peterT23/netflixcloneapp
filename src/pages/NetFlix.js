import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import Layout from "../layout/Layout";

import SimpleSlider from "../layout/Slider";
import VideoDisplay from "../layout/VideoDisplay";

import apiService from "../app/apiService";
// import axios from "axios";

// const reducer = (state,action)=>{
//   switch
// }

const NetFlix = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upComing, setUpcoming] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDY4MjBhOTNlYzRkZjZiNThkYTMxN2JmNjUxZDc4YyIsInN1YiI6IjY2MzQ0Y2UyYTFjNTlkMDEyOWU3MjU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ofXLm2NfssGz9jyIfyKGPwLg3ANTHdGjJELR0L3Mr8",
        },
      };
      try {
        let endpoints = [
          "/movie/now_playing?language=en-US&page=1",
          "/movie/popular?language=en-US&page=1",
          "/movie/top_rated?language=en-US&page=1",
          "/movie/upcoming?language=en-US&page=1",
        ];

        apiService.all(
          endpoints
            .map((endpoint) => apiService.get(endpoint, options))
            .then(
              apiService.spread(
                (
                  { data: nowPlayingMovies },
                  { data: popularMovies },
                  { data: topRatedMovies },
                  { data: upcomingMovies }
                ) => {
                  const nowPlayings = nowPlayingMovies.data.results;
                  const populars = popularMovies.data.results;
                  const topRateds = topRatedMovies.data.results;
                  const upcomings = upcomingMovies.data.results;

                  setNowPlaying(nowPlayings);
                  setPopular(populars);
                  setTopRated(topRateds);
                  setUpcoming(upcomings);
                }
              )
            )
        );
      } catch (error) {
        console.log("get movie fail", error);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <Layout>
        <VideoDisplay />
        <Box sx={{ width: "100%" }} component="div" position="relative">
          <SimpleSlider movieList="Now Playing" data={nowPlaying} />
          <SimpleSlider movieList="Popular" data={popular} />
          <SimpleSlider movieList="Top Rated" data={topRated} />
          <SimpleSlider movieList="Upcoming" data={upComing} />
        </Box>
      </Layout>
    </div>
  );
};

export default NetFlix;
