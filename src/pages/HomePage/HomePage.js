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
