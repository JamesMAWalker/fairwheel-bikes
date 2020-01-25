import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

// import './signup.styles.scss';
import { SignUpContainer, Title } from './signup.styles.jsx';



class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            
        } catch (err) {
            console.log('Error!', err);
            
        }
    };
    
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }
    
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
          <SignUpContainer className="signup">
            <Title className="title">I do not have an account</Title>
            <span>Sign up with your email and password</span>
            <form className="signup-form" onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="displayName"
                value={this.state.displayName}
                onChange={this.handleChange}
                label="Display Name"
                required
              />
              <FormInput
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                label="Email"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                label="Password"
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                label="Confirm Password"
                required
              />
              <CustomButton type="submit">Sign Up</CustomButton>
            </form>
          </SignUpContainer>
        );
    }
}

export default SignUp;

