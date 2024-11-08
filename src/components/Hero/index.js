import { Link } from "react-router-dom";
import "./style.css";
import { Fragment } from "react";
export default function Hero(props) {
  return (
    <Fragment>
      <div className="holder container-full">
        <div className="container">
          <div className="first-section items-center flex justify-between ">
            <h1 className="title">{props.heading}</h1>
            <Link to="/">HOME</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
