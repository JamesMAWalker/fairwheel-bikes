import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

// import './signin.styles.scss'
import {
  SigninContainer,
  Title,
  ButtonsContainer
} from './signin.styles.jsx';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
          await auth.signInWithEmailAndPassword(email, password);

          this.setState({ email: '', password: ''});
        } catch (err) {
          console.log('Signin error!', err);
          
        }

    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    
    render() {
        return (
          <SigninContainer className="signin">
            <Title className="title">I already have an account</Title>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                label="email"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="password"
                required
              />
              <ButtonsContainer className="buttons">
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                  {""}
                  Sign in with Google
                  {""}
                </CustomButton>
              </ButtonsContainer>
            </form>
          </SigninContainer>
        );
    }
}

export default Signin;