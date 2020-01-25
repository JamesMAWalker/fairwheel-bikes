import React, { Component } from 'react';

// import "./form-input.styles.scss";
import {
    FormGroup,
    FormInputContainer,
    FormLabel,
} from './form-input.styles.jsx';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <FormGroup className="group">
        <FormInputContainer className="form-input" onChange={handleChange} {...otherProps} />
        {
            label ?
            (<FormLabel className={`${
                otherProps.value.length ? 'shrink' : ''
            } form-input-label` }
            >
                {label}
            </FormLabel>)
            : null
        }
    </FormGroup>
);

export default FormInput;