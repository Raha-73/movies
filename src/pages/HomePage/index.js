import { ConfigProvider, Tabs } from "antd";
import LayoutComp from "../../components/LayoutComp";
import MovieList from "../../components/MovieList";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../../components/MovieCard";
import "./style.css";
import Plan from "../../components/Plan";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
  function renderList(list) {
    return list.map(function (movie, index) {
      return (
        <Fragment>
          <SwiperSlide>
            <MovieCard
              image={movie.poster}
              title={movie.title}
              genres={movie.genres}
              id={movie.id}
            />
          </SwiperSlide>
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
  const planData = [
    {
      title: "Basic",
      price: "Free",
      duration: "",
      color: "#f9ab00",
      itemList: [
        {
          enable: true,
          text: "7 days",
        },
        {
          enable: true,
          text: "720p Resolution",
        },
        {
          enable: false,
          text: "Limited Availability",
        },
        {
          enable: false,
          text: "Desktop Only",
        },
        {
          enable: false,
          text: "Limited Support",
        },
      ],
      submit: "Register",
    },
    {
      title: "Premium",
      price: "$34.99",
      duration: "/ month",
      color: "#f06629",
      itemList: [
        {
          enable: true,
          text: "1 Month",
        },
        {
          enable: true,
          text: "Full HD",
        },
        {
          enable: true,
          text: "Limited Availability",
        },
        {
          enable: false,
          text: "TV & Desktop",
        },
        {
          enable: false,
          text: "24/7 Support",
        },
      ],
      submit: "Choose Plan",
    },
    {
      title: "Cinematic",
      price: "$49.99",
      duration: "/ month",
      color: "#eb5757",
      itemList: [
        {
          enable: true,
          text: "2 Months",
        },
        {
          enable: true,
          text: "Ultra HD",
        },
        {
          enable: true,
          text: "Limited Availability",
        },
        {
          enable: true,
          text: "Any Device",
        },
        {
          enable: true,
          text: "24/7 Support",
        },
      ],
      submit: "Choose Plan",
    },
  ];
  function renderPlan() {
    return planData.map(function (item) {
      return (
        <div className="col-4">
          <Plan
            title={item.title}
            price={item.price}
            itemList={item.itemList}
            color={item.color}
            submit={item.submit}
            duration={item.duration}
          />
        </div>
      );
    });
  }

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
          id={movie.id}
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
        <section className="home container">
          <div className="home-scroll">
            <h1 className="home-title">
              <b className="bold-title">NEW ITEMS </b>
              OF THIS SEASON
            </h1>
            <Swiper slidesPerView={4.8} spaceBetween={30} className="mySwiper">
              {renderList(newMovies.data)}
            </Swiper>
          </div>
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
        </section>
        <section className="premiere">
          <div className="container">
            <div className="home-scroll">
              <h1 className="home-title">Expected premiere</h1>
              <Swiper
                slidesPerView={6.2}
                spaceBetween={30}
                className="mySwiper"
              >
                {renderList(newMovies.data)}
              </Swiper>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h1 className="plan-heading">Select your plan</h1>
            <div className="plan-section flex">{renderPlan()}</div>
          </div>
        </section>
      </LayoutComp>
    </Fragment>
  );
}

{
  /* <MovieList title="Special Movies:" link="/" api="" /> */
}
