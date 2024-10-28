import { Link } from "react-router-dom";
import LayoutComp from '../../components/LayoutComp'
import MovieList from "../../components/MovieList";
import { Fragment } from "react";


export default function HomePage() {

  return (
    <Fragment>
      <LayoutComp>
        <div>NEW ITEMS OF THIS SEASON</div>
        <MovieList title="Special Movies:" link="/" api=""/>
        <Link to="/privacypolicy">privacypolicy</Link>
      </LayoutComp>
    </Fragment>
  );
}
