import { Link } from "react-router-dom";
import "./style.css";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";

export default function Header() {
  const [search, setSearch] = useState("");
  const [searchResultVisibility, setSearchResultVisibility] = useState(false);
  const [searchResult, setSearchResult] = useState({});

  useEffect(
    function () {
      axios
        .get(`https://moviesapi.codingfront.dev/api/v1/movies?q=${search}`)
        .then(function (response) {
          setSearchResult(response.data);
        });
    },
    [search]
  );

  function renderList() {
    if (searchResult.data.length < 1) {
      return (
        <Fragment>
          <div className="search-item">no result found</div>
        </Fragment>
      );
    } else {
      return searchResult.data.map(function (item) {
        return (
          <Link to={`/movie/${item.id}`}>
            <li className="search-item">{item.title}</li>
          </Link>
        );
      });
    }
  }
  function inputChange(event) {
    const value = event.target.value;
    setSearch(value);
    setSearchResultVisibility(value.length > 0);
  }

  return (
    <Fragment>
      <div className="header container-full header-wrapper justify-between flex items-center flex-nowrap">
        <div className="container justify-between flex items-center flex-nowrap">
          <div>
            <a href="/">
              <img
                src="https://hotflix.volkovdesign.com/main/img/logo.svg"
                alt="Logo"
              />
            </a>
          </div>
          <div className="header-links">
            <Link className="header-link" to="/">
              HOME
            </Link>
            <Link className="header-link" to="/catalog">
              Catalog
            </Link>
            <Link className="header-link" to="/pricing">
              Pricing plan
            </Link>
            <Link className="header-link" to="/pages">
              Pages
            </Link>
            <Link className="header-link other" to="/more">
              ...
            </Link>
          </div>

          <div className="input-search">
            <input
              type="text"
              onChange={inputChange}
              className="search"
              placeholder="Search..."
              value={search}
            />
            {searchResultVisibility && (
              <div className="result-search">
                <ul className="search-list">{renderList()}</ul>
              </div>
            )}
          </div>
          <Link className="nickname" to="/profile">
            Nickname
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
