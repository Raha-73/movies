import { Fragment } from "react";
import { Link } from "react-router-dom";
import LayoutComp from "../../components/LayoutComp";
import "./style.css";
import Hero from "../../components/Hero";
export default function PrivacyPolicy() {
  return (
    <Fragment>
      <LayoutComp>
        <Hero heading={"Privacy Policy"} />
        <div className="container">
          <div className="section w-full container-full">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p>
              Many desktop publishing packages and <Link to="/">web page</Link>{" "}
              editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like).
            </p>
            <p>
              All the Lorem Ipsum generators on the<b> Internet </b>tend to
              repeat predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour,
              or non-characteristic words etc.
            </p>
            <h4>Determination of personal information of users</h4>
            <p>
              If you are going to use a passage of Lorem Ipsum: All the Lorem
              Ipsum generators on the Internet tend to repeat predefined chunks
              as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words, combined
              with a handful of model sentence structures, to generate Lorem
              Ipsum which looks reasonable. The generated Lorem Ipsum is
              therefore always free from repetition, injected humour, or
              non-characteristic words etc. There are many variations of
              passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. Many desktop publishing
              packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum' will uncover many web
              sites still in their infancy. Various versions have evolved over
              the years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </p>
            <h4>
              Reasons for collecting and processing user personal information
            </h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters. All the Lorem Ipsum generators on the
              Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet: It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged; It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages; Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like); Many desktop publishing packages and web page editors
              now use Lorem Ipsum as their default model text;
            </p>
          </div>
        </div>
      </LayoutComp>
    </Fragment>
  );
}
