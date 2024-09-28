import { Link } from "react-router-dom";
import Layout from "../components/layout";
import MovieList from "../components/MovieList";


export default function HomePage() {

  

  return (
    <div>
      <Layout>
        <div>salam az HomePage</div>
        <MovieList />
      </Layout>
    </div>
  );
}
