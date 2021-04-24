import React, { Component } from "react";
import "./SignIn.scss";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import { auth, signInWithGoogle } from "../../firebase/untils";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { email, password } = this.state
    try {
      console.log(email + " " + password)
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error)
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account.</h2>
        <span>Sign in with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <div className="submit-login">
            <CustomButton type="submit">SUBMIT</CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
              Sign In By Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
