import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from 'firebase';

import './signup.styles.scss';

import React, { Component } from 'react';

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

    handleSubmit = asycn event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password != confirmPassword) {
            alert('passwords do not match');
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            
            createUserProfileDocument(user, { displayName });
            
        } catch (err) {
            console.log('Error!', err);
            
        }
    }   
    
    render() {
        const { displayName, email, password, confirmaPassword } = this.state;
        return(
            <div className="signup">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChamge={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChamge={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChamge={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={password}
                        onChamge={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;

