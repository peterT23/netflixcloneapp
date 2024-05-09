import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../data/data";
import { ButtonBase } from "@mui/material";
import { ArrowRight, ArrowLeft } from "@mui/icons-material";

function NextArrow({ className, style, onClick }) {
  return (
    <ButtonBase
      // className="arrow"
      sx={{
        color: "red",
        position: "absolute",
        right: "0px",
        top: "50%",
        backgroundColor: "rgba(255,255,255,0.5)",
      }}
      // style={{
      //   display: "block",

      //   color: "white",
      // }}
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
      // style={{
      //   display: "block",

      //   color: "white",
      // }}
      onClick={onClick}
    >
      <ArrowLeft sx={{ fontSize: "2.5rem", color: "red" }} />
    </ButtonBase>
  );
}

function SimpleSlider({ data, movieList }) {
  const baseUrl = {
    BasePoster: "https://image.tmdb.org/t/p/w1280",
  };

  const handleClick = () => {
    console.log("data");
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 1500,

    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <h3>{movieList}</h3>
      <Slider className="slider" {...settings}>
        {/* <div className="card" onClick={handleClick}>
          <img
            src="https://image.tmdb.org/t/p/w1280/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg"
            alt=""
            className="imagecss"
          />
          <div className="movie-text">Love, Deaths Robots</div>
        </div> */}

        {data.map((data, index) => (
          <div key={data.id} className="card" onClick={handleClick}>
            <img
              src={`${baseUrl.BasePoster}${data.poster_path}`}
              alt=""
              className="imagecss"
            />
            <div className="movie-text">{data.title}</div>
          </div>
        ))}

        {/* <div className="card">
          <img src={data[2]} alt="" className="imagecss" />
        </div>
        <div className="card">
          <img src={data[3]} alt="" className="imagecss" />
        </div>
        <div className="card">
          <img src={data[4]} alt="" className="imagecss" />
        </div>
        <div className="card">
          <img src={data[5]} alt="" className="imagecss" />
        </div>
        <div className="card">
          <img src={data[6]} alt="" className="imagecss" />
        </div>
        <div className="card">
          <img src={data[7]} alt="" className="imagecss" />
        </div>
        <div className="card">
          <img src={data[8]} alt="" className="imagecss" />
        </div>
        <div className="card">
          <img src={data[9]} alt="" className="imagecss" />
        </div>
        <div className="card">
          <img src={data[10]} alt="" className="imagecss" />
        </div> */}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
