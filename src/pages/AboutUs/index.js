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
import How from "../../components/How";
import Hero from "../../components/Hero";
import MovieFeature from "../../components/MovieFeature";
export default function AboutUs() {
  const featureData = [
    {
      title: "Ultra HD",
      text: "Experience movies like never before with our Ultra HD feature. Immerse yourself in stunning visuals, vibrant colors, and crystal-clear detail.",
      icon: "IconBadgeHd",
    },
    {
      title: "Large movie database",
      text: "Discover a vast and diverse collection of movies in our extensive database. With thousands of titles to choose from, you'll never run out of options.",
      icon: "IconMovie",
    },
    {
      title: "Online TV",
      text: "Expand your entertainment horizons with our Online TV. Stream live TV channels, catch up on your favorite shows, and enjoy a wide range of television content online.",
      icon: "IconMovie",
    },
    {
      title: "Early access to new items",
      text: "Be the first to experience the latest movies and exclusive content with our Early Access feature. Get a sneak peek into upcoming releases, gain access to special screenings, and stay ahead of the curve.",
      icon: "IconMovie",
    },
    {
      title: "Airplay",
      text: "Seamlessly stream movies from your device to the big screen with Airplay integration. Experience the cinematic magic in the comfort of your living room and share the excitement with friends and family.",
      icon: "IconMovie",
    },
    {
      title: "Multi language subtitles",
      text: "Break language barriers and enjoy movies from around the world with our multi-language subtitles. Explore different cultures, expand your cinematic horizons, and appreciate the beauty of global cinema.",
      icon: "IconMovie",
    },
  ];

  const howData = [
    {
      number: "01",
      howtitle: "Create an account",
      howtext:
        "Start your movie-watching journey by creating a personalized account on our platform. Sign up easily and gain access to a world of entertainment",
    },
    {
      number: "02",
      howtitle: "Choose your plan",
      howtext:
        "Select the perfect plan that suits your preferences and watching habits. We offer a range of subs options from basic plans to premium plans.",
    },
    {
      number: "03",
      howtitle: "Enjoy HotFlix",
      howtext:
        "Immerse yourself in the world of HotFlix, where unlimited movie streaming awaits. With our vast collection of movies there's something for everyone.",
    },
  ];

  function renderFeatures() {
    return featureData.map(function (feature) {
      return (
        <div className="feture-card flex items-center col-4">
          <MovieFeature
            title={feature.title}
            text={feature.text}
            icon={feature.icon}
          />
          <div></div>
        </div>
      );
    });
  }

  function renderHowPart() {
    return howData.map(function (item, index) {
      return (
        <div className="work-part items-center col-4">
          <How
            number={item.number}
            howtitle={item.howtitle}
            howtext={item.howtext}
          />
        </div>
      );
    });
  }
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
            <div className="flex items-center justify-between">
              {renderFeatures()}
            </div>

            <div className="how-works flex items-center justify-between">
              <h1 className="how-title">How it works?</h1>
              <div className="flex flex-nowrap items-center ">
                {renderHowPart()}
              </div>
            </div>
          </div>
        </div>
      </LayoutComp>
    </Fragment>
  );
}
