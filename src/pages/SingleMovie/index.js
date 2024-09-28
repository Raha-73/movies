import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";

export default function SingleMovie() {
  const { id } = useParams();
  const[movie, setMovie] = useState({})

  useEffect(function(){
    axios.get(`https://moviesapi.codingfront.dev/api/v1/movies/${id}`)
    .then(function(response){
      setMovie(response.data)
    })
    .catch(function(error){
      console.log(error)
    })
  },[])
  return (
    <Fragment>
      <Layout>
        <div>salam az movie detail page</div>
        <div>page id is: {id}</div>

        <h1>{movie.title}</h1>
        <img src={movie.poster} />
      </Layout>
    </Fragment>
  );
}
