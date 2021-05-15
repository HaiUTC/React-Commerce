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
