import { Link } from "react-router-dom";
import LayoutComp from "../../components/LayoutComp";
import MovieList from "../../components/MovieList";
import { Fragment } from "react";
import MovieCard from "../../components/MovieCard";
import "./style.css";

export default function HomePage() {
  return (
    <Fragment>
      <LayoutComp>
        <div className="container">
          <div>NEW ITEMS OF THIS SEASON</div>
          <div className="test-card container flex">
            <div className="movie">
              <MovieCard />
            </div>
            <div className="movie">
              <MovieCard />
            </div>
            <div className="movie">
              <MovieCard />
            </div>
            <div className="movie">
              <MovieCard />
            </div>
          </div>
          {/* <MovieCard /> */}
          <MovieList title="Special Movies:" link="/" api="" />
        </div>
      </LayoutComp>
    </Fragment>
  );
}
