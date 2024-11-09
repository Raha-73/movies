import { ConfigProvider, Tabs } from "antd";
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
    return firstFiveNewMovies.map(function (movie, index) {
      return (
        <Fragment>
          <div className="movie" key={index}>
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
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  useEffect(function () {
    fetchMovies(activeTab);
  }, []);

  function onTabChange(key) {
    setActiveTab(key);
    fetchMovies(key);
  }

  const fetchMovies = (tabKey) => {
    setLoading(true);
    axios
      .get(`https://moviesapi.codingfront.dev/api/v1/movies?page=${tabKey}`)
      .then((response) => {
        setMovies(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  };

  function renderRecentlyMovies() {
    if (loading) {
      return <div>Loading...</div>;
    }

    return movies.map((movie) => (
      <div className="recent-movie" key={movie.id}>
        <MovieCard
          image={movie.poster}
          title={movie.title}
          genres={movie.genres}
        />
      </div>
    ));
  }

  const items = [
    {
      key: "1",
      label: "New items",
      children: <div className="flex">{renderRecentlyMovies()}</div>,
      tabStyle: { color: "#fff" },
    },
    {
      key: "2",
      label: "Movies",
      children: <div className="flex">{renderRecentlyMovies()}</div>,
      tabStyle: { color: "#fff" },
    },
    {
      key: "3",
      label: "TV Shows",
      children: <div className="flex">{renderRecentlyMovies()}</div>,
      tabStyle: { color: "#fff" },
    },
    {
      key: "4",
      label: "Anime",
      children: <div className="flex">{renderRecentlyMovies()}</div>,
      tabStyle: { color: "#fff" },
    },
  ];

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
        <div className="home container">
          <div className="home-scroll">
            <h1 className="home-title">
              <b className="bold-title">NEW ITEMS </b>
              OF THIS SEASON
            </h1>
          </div>
          <div className="test-card container flex">{renderList()}</div>
          <section className="recently-movie ">
            <h1 className="home-title">Recently updated</h1>
            <ConfigProvider theme={theme}>
              <Tabs
                className="custom-tab-bar"
                defaultActiveKey="1"
                items={items}
                onChange={onTabChange}
              />
            </ConfigProvider>
          </section>
          {/* <MovieList title="Special Movies:" link="/" api="" /> */}
        </div>
      </LayoutComp>
    </Fragment>
  );
}
