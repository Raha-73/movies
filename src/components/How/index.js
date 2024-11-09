import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function How({ howtitle, howtext, number }) {
  return (
    <Fragment>
      <div className="holder-how flex flex-nowrap">
        <div className="how-number">{number}</div>
        <div className="how information">
          <h3 className="how-title">{howtitle}</h3>
          <p className="how-text">{howtext}</p>
        </div>
      </div>
    </Fragment>
  );
}
