import { Link } from "react-router-dom";
import "./style.css";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { IconSearch } from "@tabler/icons-react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

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

  const items = [
    {
      key: "1",
      label: <Link to="/privacypolicy">Privacy policy</Link>,
    },
    {
      key: "2",
      label: <Link to="/Contacts">Contacts</Link>,
    },
    {
      key: "3",
      label: <Link to="/aboutUs">About Us</Link>,
    },
  ];

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
          <div className="d-none d-lg-block">
            <div className="header-links flex ">
              <Link className="header-link" to="/">
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

              <Dropdown
                overlayStyle={{ backgroundColor: "#222028" }}
                className="dropDown"
                menu={{ items }}
                trigger={["click"]}
              >
                <div style={{ backgroundColor: "#222028" }}>...</div>
              </Dropdown>
            </div>
          </div>

          <div className="input-search d-none d-lg-block">
            <input
              type="text"
              onChange={inputChange}
              className="search"
              placeholder="Search..."
              value={search}
            ></input>{" "}
            <a href="#" className="search-icon">
              <IconSearch className="icon" stroke={2} />
            </a>
            {searchResultVisibility && (
              <div className="result-search">
                <ul className="search-list">{renderList()}</ul>
              </div>
            )}
          </div>
          <Link className="nickname d-none d-lg-block" to="/profile">
            Nickname
          </Link>
          <div className="d-block d-lg-none">hamb</div>
        </div>
      </div>
    </Fragment>
  );
}
