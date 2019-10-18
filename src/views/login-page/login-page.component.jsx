import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './login-page.styles.sass';

const LoginPage = () => (
  <div className="login-container">
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
);

export default LoginPage;
