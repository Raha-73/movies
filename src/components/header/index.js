import { Link } from "react-router-dom";
import "./style.css";
import { Fragment } from "react";
export default function Header() {
  return (
    <Fragment>
      <div className="header justify-between container flex items-center flex-nowrap">
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
          <input className="search" placeholder="  search..." />
        </div>
        <div className="nickname">Nickname</div>
      </div>
    </Fragment>
  );
}
// فردا کارت فیلم و بساز فوتر و بساز و هدر و تکمیل کن
