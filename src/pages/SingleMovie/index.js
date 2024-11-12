import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import LayoutComp from "../../components/LayoutComp";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import { ConfigProvider, Tabs } from "antd";
import MovieCard from "../../components/MovieCard";
import Comment from "../../components/Comment";

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

  const comments = [
    {
      name: "John Doe",
      date: "30.08.2018, 17:53",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      likes: "12",
      dislikes: "7",
    },
    {
      name: "Jane Smith",
      date: "01.09.2018, 10:15",
      content: "This article was very helpful. Thanks for sharing!",
      likes: "25",
      dislikes: "2",
    },
    {
      name: "Alice Johnson",
      date: "02.09.2018, 14:27",
      content: "I disagree with some points, but overall a good read.",
      likes: "8",
      dislikes: "5",
    },
    {
      name: "Michael Brown",
      date: "03.09.2018, 08:43",
      content: "Lorem Ipsum is simply dummy text of the printing industry.",
      likes: "10",
      dislikes: "1",
    },
    {
      name: "Linda Garcia",
      date: "05.09.2018, 19:35",
      content: "I found this content somewhat confusing. Could you clarify?",
      likes: "6",
      dislikes: "3",
    },
    {
      name: "William Davis",
      date: "06.09.2018, 11:20",
      content: "Interesting read! I learned something new today.",
      likes: "30",
      dislikes: "0",
    },
    {
      name: "Emily Martinez",
      date: "07.09.2018, 13:00",
      content: "I enjoyed the article. Keep up the great work!",
      likes: "15",
      dislikes: "4",
    },
    {
      name: "James Wilson",
      date: "08.09.2018, 16:45",
      content: "Not sure I agree with everything, but well-written.",
      likes: "13",
      dislikes: "6",
    },
    {
      name: "Sophia Anderson",
      date: "09.09.2018, 12:30",
      content: "This was very informative. Thank you!",
      likes: "20",
      dislikes: "3",
    },
    {
      name: "Robert Thomas",
      date: "10.09.2018, 15:17",
      content: "Could use more examples, but overall not bad.",
      likes: "7",
      dislikes: "2",
    },
    {
      name: "Olivia Taylor",
      date: "11.09.2018, 09:05",
      content: "Great points. I especially liked the examples.",
      likes: "18",
      dislikes: "1",
    },
  ];

  const items = [
    {
      key: "1",
      label: "COMMENTS",
      children: (
        <div className="flex ">
          <div className="col-7 comment-holder">{renderComments()}</div>
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
          <div className="col-7 images-holder">{renderImages()}</div>
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

  function renderComments() {
    return comments.map(function (comment) {
      return (
        <Comment
          name={comment.name}
          date={comment.date}
          content={comment.content}
          likes={comment.likes}
          dislikes={comment.dislikes}
        />
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
          <div className="container">
            <h2 className="loading">Loading ... please wait</h2>
          </div>
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
            <section>
              <div className="container flex">
                <div className="contact-box w-full flex justify-center items-center">
                  <div className="contact-input flex flex-column col-12">
                    <label>Message</label>
                    <textarea
                      className="message "
                      placeholder="Type Your Message..."
                      rows="5"
                    />
                  </div>
                  <button className="send-information">Send</button>
                </div>
              </div>
            </section>
          </Fragment>
        )}
      </LayoutComp>
    </Fragment>
  );
}
