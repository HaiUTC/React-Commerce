import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItem.scss";
const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <div className="title">{title}</div>
        <span className="subcribe">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
