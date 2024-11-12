import { Fragment } from "react";
import "./style.css";
import { IconUser, IconThumbUp, IconThumbDown } from "@tabler/icons-react";

export default function How({ name, date, content, likes, dislikes }) {
  return (
    <Fragment>
      <div className="flex comment">
        <div className="avatar flex items-center justify-center">
          <IconUser stroke={2} />
        </div>
        <div>
          <div className="comment-name">{name}</div>
          <div className="comment-time">{date}</div>
        </div>
        <div className="comment-box">
          <div className="comment-text">{content}</div>
        </div>
        <div className="comment-feedback">
          <div className="flex">
            <div className="comment-ok flex">
              <IconThumbUp stroke={2} />
              {likes}
            </div>
            <div className="comment-notok flex items-center">
              {dislikes}
              <IconThumbDown stroke={2} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
