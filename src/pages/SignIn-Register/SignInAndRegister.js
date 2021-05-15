import React from 'react';
import SignIn from '../../component/SignIn/SignIn';
import SignUp from '../../component/signup/SignUp';
import { SignInAndRegisterContainer } from './SignIn-Register-Styled';


const SignInAndRegister = (props) =>{
    return (
        <SignInAndRegisterContainer>
            <SignIn />
            <SignUp />
        </SignInAndRegisterContainer>
    );
}

export default SignInAndRegister;