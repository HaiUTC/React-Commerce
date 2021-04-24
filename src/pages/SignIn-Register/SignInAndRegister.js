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

export default SignInAndRegister;