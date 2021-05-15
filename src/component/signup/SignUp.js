<<<<<<< HEAD
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
=======
import React, { Component } from 'react'
import './SignUp.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { auth, createUserProfile } from '../../firebase/untils';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async (event) =>{
        event.preventDefault()
        const {displayName, email, password , confirmPassword} = this.state
        if(password !== confirmPassword){
            return
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfile(user, {displayName})
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    handleChange = (event) =>{
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }
    render() {
        const {displayName, email, password , confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2>I do not have an account.</h2>
                <span>Sign up with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label="Name"
                        value={displayName}
                        onChange={this.handleChange}
                    />
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={confirmPassword}
                        onChange={this.handleChange}
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
