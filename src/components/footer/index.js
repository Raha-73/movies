import { Link } from "react-router-dom";
import "./style.css";
import { Fragment } from "react";
import { IconArrowUp } from "@tabler/icons-react";
export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Fragment>
      <section className="desktop-footer d-none d-lg-block">
        <div className="footer-wrapper container-full">
          <div className="footer container flex justify-between items-center">
            <div className="left flex items-center">
              <a href="/">
                <img src="https://hotflix.volkovdesign.com/main/img/logo.svg" />
              </a>
              <div className="footer-copyright">
                <div>© HOTFLIX, 2019—2024</div>
                <div className="created-by">
                  Create by{" "}
                  <Link className="creator-link" to="#">
                    raha saeidi
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-links items-center">
              <Link className="footer-link" to="/aboutUs">
                About Us
              </Link>
              <Link className="footer-link" to="/contacts">
                Contacts
              </Link>
              <Link className="footer-link" to="/privacypolicy">
                Privacy policy
              </Link>
              <div
                onClick={scrollToTop}
                className="scroll-top flex items-center justify-between "
              >
                <IconArrowUp stroke={2} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mobile-footer d-lg-none container">
        <div className="left col-12">
          <a href="/">
            <img src="https://hotflix.volkovdesign.com/main/img/logo.svg" />
          </a>
        </div>
        <div className="footer-links col-12 flex flex-nowrap">
          <Link className="footer-link-mobile" to="/aboutUs">
            About Us
          </Link>
          <Link className="footer-link-mobile" to="/contacts">
            Contacts
          </Link>
          <Link className="footer-link-mobile" to="/privacypolicy">
            Privacy policy
          </Link>
        </div>

        <div className="flex items-center  justify-between ">
          <div className="footer-copyright-mobile">
            <div>© HOTFLIX, 2019—2024</div>
            <div className="created-by">
              Create by{" "}
              <Link className="creator-link" to="#">
                raha saeidi
              </Link>
            </div>
          </div>
          <div
            onClick={scrollToTop}
            className="scroll-top-mobile flex items-center justify-between "
          >
            <IconArrowUp stroke={2} />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
