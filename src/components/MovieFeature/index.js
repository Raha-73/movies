import { Fragment } from "react";
import "./style.css";
import { IconBadgeHd } from "@tabler/icons-react";
import { IconDeviceTv } from "@tabler/icons-react";
import { IconMovie } from "@tabler/icons-react";
import { IconTicket } from "@tabler/icons-react";
import { IconCast } from "@tabler/icons-react";
import { IconLanguage } from "@tabler/icons-react";
export default function MovieFeature({ title, text, icon }) {
  return (
    <Fragment>
      <div className="holder-feature flex flex-nowrap">
        <div className="feture-icon ">
          <IconMovie stroke={2} />
        </div>
        <div className="description">
          <h3 className="title">{title}</h3>
          <p className="text">{text}</p>
        </div>
      </div>
    </Fragment>
  );
}
