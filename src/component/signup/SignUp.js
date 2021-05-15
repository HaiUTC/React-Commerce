import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/userAction";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import { SignUpContainer } from "./SignUp-Styled";
const SignUp = ({signUpStart}) => {
  const [userCredential, setUserCredential] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredential;
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    signUpStart({ email, password, displayName });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredential({
      ...userCredential,
      [name]: value,
    });
  };
  return (
    <SignUpContainer>
      <h2>I do not have an account.</h2>
      <span>Sign up with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Name"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userInfo) => dispatch(signUpStart(userInfo)),
});

export default connect(null, mapDispatchToProps)(SignUp);
