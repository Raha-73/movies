import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
export default function MovieCard({ image, title, genres, id }) {
  function renderGenre() {
    const genreList = Array.isArray(genres) ? genres : [];
    return genreList.map((genre, index) => (
      <Fragment>
        <div key={index}>{genre},</div>
      </Fragment>
    ));
  }
  return (
    <Fragment>
      <Link to={`/movie/${id}`}>
        <div className="card">
          <div className="img-wrapper w-full">
            <img src={image} className="w-full card-image" />
            <div className="cover"></div>
            <div className="player-holder">
              <div className="player flex justify-center items-center">
                <IconPlayerPlayFilled />
              </div>
            </div>
          </div>
          <div className="rate flex justify-center items-center">8.4</div>
          <div className="singleMovie-title">{title}</div>
          <div className="genre flex">{renderGenre()}</div>
        </div>
      </Link>
    </Fragment>
  );
}
