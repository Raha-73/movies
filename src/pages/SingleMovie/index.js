import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import LayoutComp from "../../components/LayoutComp";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import { ConfigProvider, Tabs } from "antd";
import MovieCard from "../../components/MovieCard";

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
    director: "",
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

  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(
    function () {
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

      axios
        .get(`https://moviesapi.codingfront.dev/api/v1/movies?page=10`)
        .then(function (response) {
          setSimilarMovies(response.data.data.slice(0, 6));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [id]
  );

  useEffect(
    function () {
      document.title = movie.title;
    },
    [movie]
  );

  useEffect(
    function () {
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
    },
    [id]
  );

  function renderGenres() {
    return movie.genres.map(function (item) {
      return <div className="movie-genre">{item},</div>;
    });
  }

  function onTabChange(key) {}

  const items = [
    {
      key: "1",
      label: "COMMENTS",
      children: (
        <div className="flex">
          <div className="col-7"></div>
          <div className="col-5">
            <h3 className="similar-title">You may also like...</h3>
            <div className="flex">{renderSimilarMovies()}</div>
          </div>
        </div>
      ),
      tabStyle: { color: "#fff" },
    },
    {
      key: "2",
      label: "REVIEWS",
      children: (
        <div className="flex">
          <div className="col-7"></div>
          <div className="col-5">
            <h3 className="similar-title">You may also like...</h3>
            <div className="flex">{renderSimilarMovies()}</div>
          </div>
        </div>
      ),
      tabStyle: { color: "#fff" },
    },
    {
      key: "3",
      label: "PHOTOS",
      children: (
        <div className="flex">
          <div className="col-7">{renderImages()}</div>
          <div className="col-5">
            <h3 className="similar-title">You may also like...</h3>
            <div className="flex">{renderSimilarMovies()}</div>
          </div>
        </div>
      ),
      tabStyle: { color: "#fff" },
    },
  ];

  function renderImages() {
    return movie.images.map(function (item) {
      return (
        <div className="image-item">
          <img src={item} className="w-full" />
        </div>
      );
    });
  }

  function renderSimilarMovies() {
    return similarMovies.map(function (movie) {
      return (
        <div className="col-6 similar-card">
          <MovieCard
            image={movie.poster}
            title={movie.title}
            genres={movie.genres}
            id={movie.id}
          />
        </div>
      );
    });
  }
  const theme = {
    token: {
      colorPrimary: "#f9ab00",
      colorTextBase: "#fff",
      colorLink: "#f9ab00",
      fontSize: 14,
      "tabs-tab-active-color": "#f9ab00",
      "tabs-tab-hover-color": "#f9ab00",
    },
  };

  return (
    <Fragment>
      <LayoutComp>
        {loading ? (
          <h2 className="loading">Loading ... please wait</h2>
        ) : (
          <Fragment>
            <section className="info">
              <div className="container">
                <h1 className="title">{movie.title}</h1>
                <div className="detail flex">
                  <div className="detail-image">
                    <img src={movie.poster} className="w-full" />
                    <div className="rate flex items-center justify-center">
                      {movie.imdb_rating}
                    </div>
                    <div className="favorite items-center justify-center flex">
                      <IconBookmark stroke={2} />
                    </div>
                  </div>
                  <div className="information flex">
                    <div className="info-item flex gap-6">
                      <div>Director : </div>
                      <div className="orange">{movie.director}</div>
                    </div>
                    <div className="info-item flex gap-6 flex-nowrap">
                      <div>Cast: </div>
                      <div className="orange">{movie.actors}</div>
                    </div>
                    <div className="info-item flex gap-6 flex-nowrap">
                      <div>Genre: </div>
                      <div className="orange flex gap-6">{renderGenres()}</div>
                    </div>
                    <div className="info-item flex gap-6 flex-nowrap">
                      <div>Premiere: </div>
                      <div className="flex gap-6">{movie.year}</div>
                    </div>
                    <div className="info-item flex gap-6 flex-nowrap">
                      <div>Running time: </div>
                      <div className="flex gap-6">{movie.runtime}</div>
                    </div>
                    <div className="info-item flex gap-6 flex-nowrap">
                      <div>Country:</div>
                      <div className="orange flex gap-6">{movie.country}</div>
                    </div>
                    <div className="desc">{movie.plot}</div>
                  </div>
                  <div className="poster">
                    <img src={movie.images[0]} className="w-full" />
                  </div>
                </div>
              </div>
            </section>
            <section className="more-detail">
              <div className="container">
                <h3 className="title">Discover</h3>
                <ConfigProvider theme={theme}>
                  <Tabs
                    className="custom-tab-bar"
                    defaultActiveKey="1"
                    items={items}
                    onChange={onTabChange}
                  />
                </ConfigProvider>
              </div>
            </section>
          </Fragment>
        )}
      </LayoutComp>
    </Fragment>
  );
}
