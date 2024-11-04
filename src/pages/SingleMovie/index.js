import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import LayoutComp from "../../components/LayoutComp";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment-jalaali";
import "./style.css";

export default function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    id: 0,
    title: "",
    poster: "",
    year: "",
    rated: "",
    released: "",
    runtime: "",
    director: "F",
    writer: "",
    actors: "",
    plot: "",
    country: "",
    awards: "",
    metascore: "",
    imdb_rating: "",
    imdb_votes: "",
    imdb_id: "",
    type: "",
    genres: [],
    images: [],
  });

  const [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true);
    axios
      .get(`https://moviesapi.codingfront.dev/api/v1/movies/${id}`)
      .then(function (response) {
        setMovie(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(
    function () {
      document.title = movie.title;
    },
    [movie]
  );

  function renderGenres() {
    return movie.genres.map(function (item) {
      return <div className="movie-genre">{item}</div>;
    });
  }

  return (
    <Fragment>
      <LayoutComp>
        {loading ? (
          <h2 className="loading">Loading ... please wait</h2>
        ) : (
          <Fragment>
            <div className="container">
              <div>movie detail page</div>
              <div>page id is: {id}</div>

              <h1>{movie.title}</h1>
              <img src={movie.poster} />
              <h2>{movie.actors}</h2>
              <h3>{movie.plot}</h3>
              <h2>Movie genre: </h2>
              <div className="genres">{renderGenres()}</div>
              <h1>{moment(movie.released).format("jYYYY/jMM/jDD")}</h1>
            </div>
          </Fragment>
        )}
      </LayoutComp>
    </Fragment>
  );
}
