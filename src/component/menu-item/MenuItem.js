<<<<<<< HEAD
import React from "react";
import { withRouter } from "react-router-dom";
import { BackgroundImage, Content, MenuItemContainer, Subscribe, Title } from './MenuItem-Styled';
const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => {
  return (
    <MenuItemContainer size={size}
      onClick={() => history.push(`${linkUrl}`)}
    >
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Content>
        <Title>{title}</Title>
        <Subscribe>SHOP NOW</Subscribe>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
=======
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
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
