<<<<<<< HEAD
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

=======
import React from 'react';
import './SignInAndRegister.scss'
import SignIn from '../../component/SignIn/SignIn';
import SignUp from '../../component/signup/SignUp'

const SignInAndRegister = (props) =>{
    return (
        <div className='SignInAndRegister'>
            <SignIn />
            <SignUp />
        </div>
    );
}

>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
export default SignInAndRegister;