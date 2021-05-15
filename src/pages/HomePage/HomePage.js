import React from "react";
import Directory from "../../component/directory/Directory";
import {HomePageContainer} from './HomePage-Styled'

const HomePage = (props) => {
  return (
    <HomePageContainer>
      <h1>Welcome to my Page</h1>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
