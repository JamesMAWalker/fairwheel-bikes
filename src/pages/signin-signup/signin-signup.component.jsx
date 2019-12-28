import React from "react";

import "./signin-signup.styles.scss";
import SignUp from '../../components/signup/signup.component';
import Signin from '../../components/signin/signin.component';

const SigninSignup = () => (
    <div className="signin-signup">
        <Signin />
        <SignUp />
    </div>
);

export default SigninSignup;
