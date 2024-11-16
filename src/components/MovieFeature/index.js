import { Fragment } from "react";
import "./style.css";
import { IconBadgeHd } from "@tabler/icons-react";
import { IconDeviceTv } from "@tabler/icons-react";
import { IconMovie } from "@tabler/icons-react";
import { IconTicket } from "@tabler/icons-react";
import { IconCast } from "@tabler/icons-react";
import { IconLanguage } from "@tabler/icons-react";
export default function MovieFeature({ title, text, icon }) {
  function iconSelector() {
    if (icon === "IconBadgeHd") {
      return <IconBadgeHd stroke={2} />;
    } else if (icon === "IconDeviceTv") {
      return <IconDeviceTv stroke={2} />;
    } else if (icon === "IconMovie") {
      return <IconMovie stroke={2} />;
    } else if (icon === "IconTicket") {
      return <IconTicket stroke={2} />;
    } else if (icon === "IconCast") {
      return <IconCast stroke={2} />;
    } else if (icon === "IconLanguage") {
      return <IconLanguage stroke={2} />;
    }
  }
  return (
    <Fragment>
      <div className="holder-feature flex flex-nowrap">
        <div className="feature-icon ">{iconSelector()}</div>
        <div className="description">
          <h3 className="title">{title}</h3>
          <p className="text">{text}</p>
        </div>
      </div>
    </Fragment>
  );
}
