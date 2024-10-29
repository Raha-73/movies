import { Fragment } from "react";

export default function MovieCard() {
  return (
    <Fragment>
      <div className="card">
        <img
          src="https://hotflix.volkovdesign.com/main/img/covers/cover.jpg"
          className="w-full"
        />
        <div className="title">I Dream in Another Language</div>
        <div className="genre">Action Triler</div>
      </div>
    </Fragment>
  );
}
