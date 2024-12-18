import { Link } from "react-router-dom";
import "./style.css";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Dropdown, Space } from "antd";
import {
  IconSearch,
  IconMenu2,
  IconUser,
  IconChevronDown,
} from "@tabler/icons-react";

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
  const language = [
    {
      key: "en",
      label: <Link to="#">English</Link>,
    },
    {
      key: "sp",
      label: <Link to="#">Spanish</Link>,
    },
    {
      key: "fr",
      label: <Link to="#">French</Link>,
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

  function toggleMobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("menu-open");
  }

  return (
    <Fragment>
      <section className="desktop-mode d-none d-lg-block">
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

            <div className="input-search ">
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
            <Link className="nickname " to="/profile">
              Nickname
            </Link>
          </div>
        </div>
      </section>
      <section className="mobile-mode d-lg-none">
        <div className="header container-full header-wrapper justify-between flex items-center flex-nowrap">
          <div className="mobile-menu ">
            <ul className="mobile-list">
              <li className="mobile-list-item flex items-center">
                <Link to="/">HOME</Link>
              </li>
              <li className="mobile-list-item flex items-center">
                <Link to="/ Contacts">CONTACTS</Link>
              </li>
              <li className="mobile-list-item">
                <Link to="/aboutus">ABOUTUS</Link>
              </li>
              <li className="mobile-list-item flex items-center">
                <Link to="/privacypolicy">PRIVACYPOLICY</Link>
              </li>
              <li className="mobile-list-item">
                <Link to="/Contacts">...</Link>
              </li>
            </ul>
          </div>
          <div className="container justify-between flex items-center flex-nowrap">
            <div>
              <a href="/">
                <img
                  src="https://hotflix.volkovdesign.com/main/img/logo.svg"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="phone-use flex items-center">
              <IconSearch className="icon" stroke={2} />
              <Dropdown
                overlayStyle={{ backgroundColor: "#222028" }}
                className="dropDown1"
                menu={{ items }}
                trigger={["click"]}
              >
                <div
                  className="language flex items-center "
                  style={{ backgroundColor: "#222028" }}
                >
                  <span>EN</span>{" "}
                  <IconChevronDown width="12" height="12" stroke={2} />
                </div>
              </Dropdown>
              <div className="user flex items-center justify-center">
                <IconUser stroke={2} />
              </div>
              <div onClick={toggleMobileMenu}>
                <IconMenu2 stroke={2} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
