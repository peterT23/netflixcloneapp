import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import SimpleSlider from "../layout/Slider";
import VideoDisplay from "../layout/VideoDisplay";

import apiService from "../app/apiService";
import { BEARER } from "../app/config";
// import VideoDisplaySlider from "../layout/VideoDisplaySlider";

const ListMovies = ({ listName, title, page }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: BEARER,
        },
      };
      try {
        const response = await apiService.get(
          `/movie/${listName}?language=en-US&page=${page}`,
          options
        );
        if (response.data.length === 0) return;
        setList(response.data.results);
      } catch (error) {
        console.log("get movie fail", error);
      }
    };
    getMovies();
    // eslint-disable-next-line
  }, []);

  return <SimpleSlider title={title} data={list} />;
};

const ListMoviesByGenre = ({ genre, title }) => {
  const [listByGenre, setListByGenre] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: BEARER,
        },
      };
      try {
        const response = await apiService.get(
          `/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=${genre}`,
          options
        );
        console.log("response movies", response.data.results);
        setListByGenre(response.data.results);
      } catch (error) {
        console.log("get movie fail", error);
      }
    };
    getMovies();
    // eslint-disable-next-line
  }, []);
  return <SimpleSlider title={title} data={listByGenre} />;
};

const NetFlix = () => {
  return (
    <>
      <VideoDisplay />
      {/* <VideoDisplaySlider /> */}
      <Box sx={{ width: "100%" }} component="div" position="relative">
        <ListMovies title="Now Playing" listName="now_playing" page={1} />
        <ListMovies title="Popular" listName="popular" page={2} />
        <ListMovies title="Top Rated" listName="top_rated" page={2} />
        <ListMovies title="Upcoming" listName="upcoming" page={1} />
        <ListMoviesByGenre title="Action" genre={28} />
        <ListMoviesByGenre title="Adventure" genre={12} />
        <ListMoviesByGenre title="animation" genre={16} />
        <ListMoviesByGenre title="Comedy" genre={35} />
        <ListMoviesByGenre title="Drama" genre={18} />
        <ListMoviesByGenre title="Horror" genre={27} />
        <ListMoviesByGenre title="Science Fiction" genre={878} />
        <Outlet />
      </Box>
    </>
  );
};

export default NetFlix;
