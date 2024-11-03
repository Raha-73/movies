import { Link } from "react-router-dom";
import "./style.css";
import { Fragment } from "react";
export default function Header() {
  return (
    <Fragment>
      <div className="header container-full header-wrapper justify-between flex items-center flex-nowrap">
        <div className="container justify-between flex items-center flex-nowrap">
          <div>
            <a href="/">
              <img src="https://hotflix.volkovdesign.com/main/img/logo.svg" />
            </a>
          </div>
          <div className="header-links">
            <Link className="header-link" to="#">
              HOME
            </Link>
            <Link className="header-link" to="#">
              Catalog
            </Link>
            <Link className="header-link" to="#">
              Pricing plan
            </Link>
            <Link className="header-link" to="#">
              Pages
            </Link>
            <Link className="header-link other" to="#">
              ...
            </Link>
          </div>
          <div className="input-search">
            <input className="search" placeholder="Search..." />
          </div>
          <Link className="nickname" to="">
            Nickname
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
