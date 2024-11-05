import { Link } from "react-router-dom";
import LayoutComp from "../../components/LayoutComp";
import MovieList from "../../components/MovieList";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../../components/MovieCard";
import "./style.css";

export default function HomePage() {
  const [newMovies, setNewMovies] = useState({
    data: [],
    metadata: {},
  });
  useEffect(function () {
    axios
      .get(`https://moviesapi.codingfront.dev/api/v1/movies?page=1`)
      .then(function (response) {
        setNewMovies(response.data);
      })
      .catch(function (error) {
        console.log("error404");
      });
  }, []);
  function renderList() {
    const firstFiveNewMovies = newMovies.data.slice(0, 5);
    return firstFiveNewMovies.map(function (movie) {
      return (
        <Fragment>
          <div className="movie">
            <MovieCard
              image={movie.poster}
              title={movie.title}
              genres={movie.genres}
            />
          </div>
        </Fragment>
      );
    });
  }

  return (
    <Fragment>
      <LayoutComp>
        <div className="home container uppercase">
          <div className="home-scroll">
            <h1 className="home-title">
              <b className="bold-title">NEW ITEMS </b>
              OF THIS SEASON
            </h1>
          </div>
          <div className="test-card container flex">{renderList()}</div>
          <MovieList title="Special Movies:" link="/" api="" />
        </div>
      </LayoutComp>
    </Fragment>
  );
}
