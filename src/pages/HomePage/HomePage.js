<<<<<<< HEAD
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
=======
import React from "react";
import Directory from "../../component/directory/Directory";
import "./HomePage.scss";

const HomePage = (props) => {
  return (
    <div className="HomePage">
      <h1>Welcome to my Page</h1>
      <Directory />
    </div>
  );
};

export default HomePage;
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
