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
