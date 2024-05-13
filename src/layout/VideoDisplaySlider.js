// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useNavigate } from "react-router-dom";
// import { ButtonBase } from "@mui/material";
// import { ArrowRight, ArrowLeft } from "@mui/icons-material";
// import apiService from "../app/apiService";

// function NextArrow({ className, style, onClick }) {
//   return (
//     <ButtonBase
//       sx={{
//         color: "red",
//         position: "absolute",
//         right: "0px",
//         top: "50%",
//         backgroundColor: "rgba(255,255,255,0.5)",
//       }}
//       onClick={onClick}
//     >
//       <ArrowRight sx={{ fontSize: "2.5rem", color: "red" }} />
//     </ButtonBase>
//   );
// }

// function PrevArrow({ className, style, onClick }) {
//   return (
//     <ButtonBase
//       sx={{
//         color: "red",
//         position: "absolute",
//         left: "0px",
//         top: "50%",
//         backgroundColor: "rgba(255,255,255,0.5)",
//         zIndex: "1",
//       }}
//       className="arrow"
//       onClick={onClick}
//     >
//       <ArrowLeft sx={{ fontSize: "2.5rem", color: "red" }} />
//     </ButtonBase>
//   );
// }

// function VideoDisplaySlider({ title, data }) {
//   const [listByGenre, setListByGenre] = useState([]);

//   useEffect(() => {
//     const getMovies = async () => {
//       const options = {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDY4MjBhOTNlYzRkZjZiNThkYTMxN2JmNjUxZDc4YyIsInN1YiI6IjY2MzQ0Y2UyYTFjNTlkMDEyOWU3MjU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ofXLm2NfssGz9jyIfyKGPwLg3ANTHdGjJELR0L3Mr8",
//         },
//       };
//       try {
//         const response = await apiService.get(
//           `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=${genre}`,
//           options
//         );
//         console.log("response movies", response.data.results);
//         setListByGenre(response.data.results);
//       } catch (error) {
//         console.log("get movie fail", error);
//       }
//     };
//     getMovies();
//     // eslint-disable-next-line
//   }, []);
//   // const navigate = useNavigate();
//   const baseUrl = {
//     BasePoster: "https://image.tmdb.org/t/p/w1280",
//   };
//   const settings = {
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: function (currentSlide, nextSlide) {
//       console.log("before change", currentSlide, nextSlide);
//     },
//     afterChange: function (currentSlide) {
//       console.log("after change", currentSlide);
//     },
//   };

//   return (
//     <div className="imgcontainer">
//       <h3>{title}</h3>
//       <Slider className="slider" {...settings}>
//         {listByGenre.map((data, index) => (
//           <div
//             key={data.id}
//             className="card"
//             // onClick={() => handleClick(data.id)}
//           >
//             <img
//               src={`${baseUrl.BasePoster}${data.poster_path}`}
//               alt=""
//               className="imagecss"
//             />
//             <div className="movie-text">{data.title}</div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default VideoDisplaySlider;
