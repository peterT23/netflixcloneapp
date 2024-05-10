import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Modal, Rating } from "@mui/material";
import apiService from "../app/apiService";

import Slide from "@mui/material/Slide";

import { useNavigate } from "react-router-dom";
import Logo from "../layout/Logo";

const baseUrl = {
  BasePoster: "https://image.tmdb.org/t/p/w1280",
};

function MovieDetailPage() {
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState([]);

  const open = useRef(false);
  const checked = useRef(false);
  open.current = true;
  checked.current = true;

  const paramId = useParams();
  console.log("paramsID", paramId);

  const getMovieDetail = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDY4MjBhOTNlYzRkZjZiNThkYTMxN2JmNjUxZDc4YyIsInN1YiI6IjY2MzQ0Y2UyYTFjNTlkMDEyOWU3MjU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ofXLm2NfssGz9jyIfyKGPwLg3ANTHdGjJELR0L3Mr8",
      },
    };
    try {
      const response = await apiService.get(`/movie/${paramId.id}`, options);
      console.log("movie detail response", response.data);
      setMovieDetail(response.data);
    } catch (error) {
      console.log("get detail movies fail");
    }
  };
  useEffect(() => {
    getMovieDetail();
  }, []);

  const closeModal = () => {
    navigate(-1);
    open.current = false;
    checked.current = false;
  };

  let rating =
    Math.floor(movieDetail.vote_average) +
    Math.floor(
      (movieDetail.vote_average - Math.floor(movieDetail.vote_average)) * 10
    ) /
      10;
  console.log("vote", rating);

  const handleOnclick = () => {
    navigate(`/movies/${paramId.id}/trailer`);
  };

  return (
    <Modal
      open={open.current}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Slide direction="down" in={checked.current} mountOnEnter unmountOnExit>
        <div
          style={{
            position: "relative",
            top: "20%",
            left: 0,
            transform: "translate(-50%, -50%)",
            width: "80vw",
            margin: "auto",
            height: "100%",

            backgroundImage: `url(${baseUrl.BasePoster}${movieDetail.backdrop_path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(1,1,1,0.4)",
            border: "2px solid #000",
            boxShadow: 24,
            padding: 4,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              margin: "auto",
              backgroundColor: "rgba(1,1,1,0.6)",

              padding: "3rem",
            }}
          >
            <Logo />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <div>
                <Rating
                  name="customized-10"
                  value={rating}
                  precision={0.1}
                  readOnly
                  max={10}
                />

                <div
                  style={{
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {rating}/10
                </div>

                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginTop: "20px",
                    paddingLeft: "10px",
                    color: "white",
                    borderLeft: "4px solid red",
                  }}
                >
                  {movieDetail.original_title}
                </div>
                <div
                  style={{
                    maxWidth: "500px",
                    marginTop: "20px",
                    fontSize: "1.2em",
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  {movieDetail.overview}
                </div>
                <button
                  onClick={handleOnclick}
                  style={{
                    marginTop: "2rem",
                    border: "none",
                    borderRadius: "20px",
                    padding: "10px",
                    backgroundColor: "red",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  WATCH TRAILER
                </button>
              </div>
              <div>
                <img
                  style={{
                    width: "35vw",
                    border: "3px solid white",
                    margin: "5%",
                  }}
                  src={`${baseUrl.BasePoster}${movieDetail.poster_path}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </Modal>
  );
}

export default MovieDetailPage;
