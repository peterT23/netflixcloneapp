import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import { Box, Typography } from "@mui/material";
// import axios from "axios";
import apiService from "../app/apiService";
import { useLoaderData, useNavigate } from "react-router-dom";

export async function loader({ request }) {
  console.log("request", request);
  const url = new URL(request.url);
  console.log("url", url);
  const q = url.searchParams.get("q");
  console.log("q", q);
  return { q };
}

function SearchPage() {
  const baseUrl = {
    BasePoster: "https://image.tmdb.org/t/p/w1280",
  };

  const navigate = useNavigate();
  const { q } = useLoaderData();

  const [searchMovie, setSearchMovie] = useState([]);
  useEffect(() => {
    const getSearchMovies = async () => {
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
          `https://api.themoviedb.org/3/search/movie?query=${q}&include_adult=true&language=en-US`,
          options
        );

        console.log("search movies", response.data.results);
        setSearchMovie(response.data.results);
      } catch (error) {
        console.log("get movie fail", error);
      }
    };
    getSearchMovies();
    // eslint-disable-next-line
  }, [q]);
  const handleClick = (id) => {
    console.log("data", id);
    navigate(`movies/${id}`);
  };

  return (
    <div className="search-container">
      {searchMovie.map(
        (data, index) =>
          data.poster_path && (
            <div
              key={data.id}
              className="search-card"
              onClick={() => handleClick(data.id)}
            >
              <img
                src={`${baseUrl.BasePoster}${data.poster_path}`}
                alt=""
                className="search-imagecss"
              />
              <div className="search-movie-text">
                {data.title ? data.title : data.name}
              </div>
            </div>
          )
      )}
      <Outlet />
    </div>
  );
}

export default SearchPage;
