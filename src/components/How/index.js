import { Fragment } from "react";
import "./style.css";

export default function How({ number, howtitle, howtext }) {
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
