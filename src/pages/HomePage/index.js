import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import MovieList from "../../components/MovieList";


export default function HomePage() {

  

  return (
    <div>
      <Layout>
        <div>HomePage</div>
        <MovieList title="Special Movies:" link="/" api=""/>
      </Layout>
    </div>
  );
}
