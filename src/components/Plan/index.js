import "./style.css";
import { Fragment, useState, useEffect } from "react";
import { IconCircleCheck } from "@tabler/icons-react";
import { IconCircleMinus } from "@tabler/icons-react";
export default function Plan({
  title,
  price,
  itemList,
  duration,
  color,
  submit,
}) {
  function renderList() {
    return itemList.map(function (item) {
      return (
        <li className="plan-item">
          {item.enable ? (
            <IconCircleCheck stroke={2} />
          ) : (
            <IconCircleMinus stroke={2} />
          )}

          {item.enable ? (
            <div className="white">{item.text}</div>
          ) : (
            <div className="gray">{item.text}</div>
          )}
        </li>
      );
    });
  }
  return (
    <Fragment>
      <div
        className="plan flex flex-column w-full"
        style={{ borderColor: color }}
      >
        <div className="plan-banner flex items-center justify-between">
          <h3 className="plan-title">{title}</h3>
          <div className="plan-price flex" style={{ color: color }}>
            {price}
            <div className="duration">{duration}</div>
          </div>
        </div>
        <ul className="plan-list">{renderList()}</ul>
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
