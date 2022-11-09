import React, { useEffect, useState } from "react"
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=82b8cb8bd84a11729a4c977e74c5e3f9&language=en-US&page=1")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
  }, [])

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {
            popularMovies.map(movie => (
              <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                <div className="posterImage">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                </div>
                <div className="posterImage__overlay">timeout
                  <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                  <div className="posterImage__runtime">
                    {movie ? movie.release_date : ""}
                    <span className="posterImage__rating">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                  <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                </div>
              </Link>
            ))
          }
        </Carousel>
        <MovieList/>
      </div>
    </>
  )
}

export default Home









