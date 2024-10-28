import { Link } from "react-router-dom";
import LayoutComp from '../../components/LayoutComp'
import MovieList from "../../components/MovieList";
import { Fragment } from "react";
import MovieCard from "../../components/MovieCard";

export default function HomePage() {

  return (
    <Fragment>
      <LayoutComp>
        <div className="container">
          <div>NEW ITEMS OF THIS SEASON</div>
          
          <MovieCard />
          <MovieList title="Special Movies:" link="/" api=""/>
          <Link to="/privacypolicy">privacypolicy</Link>
        </div>
      </LayoutComp>
    </Fragment>
  );
}
