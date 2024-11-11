import "./style.css";
import { Fragment, useState, useEffect } from "react";

export default function Plan({ title, price, itemList, color, submit }) {
  return (
    <Fragment>
      <div
        className="plan flex flex-column w-full"
        style={{ borderColor: color }}
      >
        <div className="plan-banner flex items-center justify-between">
          <h3 className="plan-title" style={{ color: color }}>
            {title}
          </h3>
          <div className="plan-price">{price}</div>
        </div>
        <ul className="plan-item">{itemList}</ul>
        <button
          className="submit flex items-center justify-center"
          style={{ borderColor: color }}
        >
          {submit}
        </button>
      </div>
    </Fragment>
  );
}
