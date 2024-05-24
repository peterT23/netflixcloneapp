import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { ButtonBase } from "@mui/material";
import { ArrowRight, ArrowLeft } from "@mui/icons-material";

function NextArrow({ className, style, onClick }) {
  return (
    <ButtonBase
      sx={{
        color: "red",
        position: "absolute",
        right: "0px",
        top: "50%",
        backgroundColor: "rgba(255,255,255,0.5)",
      }}
      onClick={onClick}
    >
      <ArrowRight sx={{ fontSize: "2.5rem", color: "red" }} />
    </ButtonBase>
  );
}
function PrevArrow({ className, style, onClick }) {
  return (
    <ButtonBase
      sx={{
        color: "red",
        position: "absolute",
        left: "0px",
        top: "50%",
        backgroundColor: "rgba(255,255,255,0.5)",
        zIndex: "1",
      }}
      className="arrow"
      onClick={onClick}
    >
      <ArrowLeft sx={{ fontSize: "2.5rem", color: "red" }} />
    </ButtonBase>
  );
}

function SimpleSlider({ data, title }) {
  const navigate = useNavigate();
  const baseUrl = {
    BasePoster: "https://image.tmdb.org/t/p/w1280",
  };

  const handleClick = (id) => {
    console.log("data", id);
    navigate(`movies/${id}`);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,

    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="imgcontainer">
      <h3>{title}</h3>
      <Slider className="slider" {...settings}>
        {data.map((data) => (
          <div
            key={data.id}
            className="card"
            onClick={() => handleClick(data.id)}
          >
            <img
              src={`${baseUrl.BasePoster}${data.poster_path}`}
              alt=""
              className="imagecss"
            />
            <div className="movie-text">{data.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
