import React, { useState } from "react";
import { connect } from "react-redux";
import {
  emailSigninStart,
  googleSigninStart,
} from "../../redux/user/userAction";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import { SignInContainer, SubmitLogin } from "./SignIn-Styled";

const SignIn = ({emailSigninStart, googleSignInStart}) => {

  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredential;

  const handleSubmit = async (event) => {
    event.preventDefault();
    await emailSigninStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredential({
      ...userCredential,
      [name]: value,
    });
  };
  
  return (
    <SignInContainer>
      <h2>I already have an account.</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <SubmitLogin>
          <CustomButton type="submit">SUBMIT</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In By Google
          </CustomButton>
        </SubmitLogin>
      </form>
    </SignInContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
