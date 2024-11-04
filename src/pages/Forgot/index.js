import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Forgot() {
  return (
    <Fragment>
      <div className="error-404 flex justify-center items-center">
        <div className="background-img-404"></div>
        <div className="content flex">
          <div className="num-error">
            <a href="/">
              <img src="https://hotflix.volkovdesign.com/main/img/logo.svg" />
            </a>
          </div>
          <input className="mail" placeholder="Email"></input>
          <div className="text text-2">not available!</div>
          <button>
            <Link to="/">SEND</Link>
          </button>
          {/* <Link to="/about-us">About Us</Link> */}
        </div>
      </div>
    </Fragment>
  );
}
