import React from 'react';
import { withRouter } from 'react-router-dom';

// import "./menu-item.styles.scss";
import {
  MenuItemContainer,
  BGImage,
  ContentContainer,
  Title,
  SubTitle
} from './menu-item.styles.jsx';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    className={`${size} menu-item`}
    onClick={ () => history.push(`${match.url}${linkUrl}`)}
  >
    <BGImage
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <ContentContainer className="content">
      <Title className="title">{title.toUpperCase()}</Title>
      <SubTitle className="subtitle">shop now</SubTitle>
    </ContentContainer>
  </MenuItemContainer>
  
);

export default withRouter(MenuItem);