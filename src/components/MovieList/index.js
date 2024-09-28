import { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

export default function MovieList() {
  const [movies, setMovies] = useState({
    data: [],
    metadata: {},
  });
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    document.title = "homepage";
  }, []);
  useEffect(function () {
    setLoading(true);
    axios
      .get("https://moviesapi.codingfront.dev/api/v1/movies")
      .then(function (response) {
        setMovies(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  function renderMovies() {
    return movies.data.map(function ({ title, poster }, index) {
      return (
        <li key={index} className="movie-list">
          <img src={poster} />
        </li>
      );
    });
  }

  return (
    <Fragment>
      <div className="movie-list">
        <div className="container">
          <div className="header-section">
            <Link to="/">
              <h2>ویژه</h2>
            </Link>
          </div>
          <div className="movie-items">
            <ul>
              {loading == true
                ? "فیلم ها در حال بارگزاری هستند ..."
                : renderMovies()}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
