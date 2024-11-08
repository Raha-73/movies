import { Fragment } from "react";
import { Link } from "react-router-dom";
import LayoutComp from "../../components/LayoutComp";
import "./style.css";
import { IconBadgeHd } from "@tabler/icons-react";
import { IconDeviceTv } from "@tabler/icons-react";
import { IconMovie } from "@tabler/icons-react";
import { IconTicket } from "@tabler/icons-react";
import { IconCast } from "@tabler/icons-react";
import { IconLanguage } from "@tabler/icons-react";
import Hero from "../../components/Hero";
export default function AboutUs() {
  return (
    <Fragment>
      <LayoutComp>
        <Hero heading={"About Us"} />
        <div className="container">
          <h1 className="section-title">
            <b>HotFlix</b> – Best Place for Movies
          </h1>
          <p className="section-text">
            Welcome to<b className="bold"> HotFlix </b>
            movie site, the ultimate destination for all film enthusiasts.
            Immerse yourself in a world of captivating stories, stunning
            visuals, and unforgettable performances. Explore our extensive
            library of movies, spanning across genres, eras, and cultures.
          </p>
          <p className="section-text">
            Indulge in the joy of cinema with our curated collections, featuring
            handpicked movies grouped by themes, directors, or actors. Dive into
            the world of cinematic magic and let yourself be transported to new
            realms of imagination and emotion.
          </p>
          <div className="feture flex items-center justify-between">
            <div className="feture-card flex items-center col-4">
              <div className="feture-icon">
                <IconBadgeHd stroke={2} />
              </div>
              <h3 className="title">Ultra HD</h3>
              <p className="text">
                Experience movies like never before with our Ultra HD feature.
                Immerse yourself in stunning visuals, vibrant colors, and
                crystal-clear detail.
              </p>
            </div>
            <div className="feture-card flex items-center col-4">
              <div className="feture-icon">
                <IconMovie stroke={2} />
              </div>
              <h3 className="title">Large movie database</h3>
              <p className="text">
                Discover a vast and diverse collection of movies in our
                extensive database. With thousands of titles to choose from,
                you'll never run out of options.
              </p>
            </div>
            <div className="feture-card flex items-center col-4">
              <div className="feture-icon">
                <IconDeviceTv stroke={2} />
              </div>
              <h3 className="title">Online TV</h3>
              <p className="text">
                Expand your entertainment horizons with our Online TV. Stream
                live TV channels, catch up on your favorite shows, and enjoy a
                wide range of television content online.
              </p>
            </div>
            <div className="feture-card flex items-center col-4">
              <div className="feture-icon">
                <IconTicket stroke={2} />
              </div>
              <h3 className="title">Early access to new items</h3>
              <p className="text">
                Be the first to experience the latest movies and exclusive
                content with our Early Access feature. Get a sneak peek into
                upcoming releases, gain access to special screenings, and stay
                ahead of the curve.
              </p>
            </div>
            <div className="feture-card flex items-center col-4">
              <div className="feture-icon">
                <IconCast stroke={2} />
              </div>
              <h3 className="title">Airplay</h3>
              <p className="text">
                Seamlessly stream movies from your device to the big screen with
                Airplay integration. Experience the cinematic magic in the
                comfort of your living room and share the excitement with
                friends and family.
              </p>
            </div>
            <div className="feture-card flex items-center col-4">
              <div className="feture-icon">
                <IconLanguage stroke={2} />
              </div>
              <h3 className="title">Multi language subtitles</h3>
              <p className="text">
                Break language barriers and enjoy movies from around the world
                with our multi-language subtitles. Explore different cultures,
                expand your cinematic horizons, and appreciate the beauty of
                global cinema.
              </p>
            </div>
            <div className="how-works">
              <h1 className="how-title">How it works?</h1>
              <div className="kkk flex flex-nowrap  items-center ">
                <div className="work-part  items-center col-4">
                  <h1 className="part-number">01</h1>
                  <h3 className="part-title">Create an account</h3>
                  <div className="part-text">
                    Start your movie-watching journey by creating a personalized
                    account on our platform. Sign up easily and gain access to a
                    world of entertainment.
                  </div>
                </div>
                <div className="work-part  items-center col-4">
                  <h1 className="part-number">02</h1>
                  <h3 className="part-title">Choose your plan</h3>
                  <div className="part-text">
                    Select the perfect plan that suits your preferences and
                    watching habits. We offer a range of subs options from basic
                    plans to premium plans.
                  </div>
                </div>
                <div className="work-part  items-center col-4">
                  <h1 className="part-number">03</h1>
                  <h3 className="part-title">Enjoy HotFlix</h3>
                  <div className="part-text">
                    Immerse yourself in the world of HotFlix, where unlimited
                    movie streaming awaits. With our vast collection of movies
                    there's something for everyone.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutComp>
    </Fragment>
  );
}
