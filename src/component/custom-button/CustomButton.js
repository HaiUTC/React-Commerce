<<<<<<< HEAD
import React from "react";
import {CustomButtonContainer} from './CustomButton-Styled'
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <CustomButtonContainer {...otherProps}>
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
=======
import React from "react";
import "./CustomButtom.scss";
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
