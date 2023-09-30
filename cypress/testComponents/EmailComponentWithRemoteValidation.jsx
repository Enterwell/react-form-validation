import React, { useEffect } from 'react';
import { useValidation, isValidEmail } from '../../src';

const EmailComponentWithRemoteValidation = (props) => {
    const emailValidation = (value) => new Promise((resolve) => setTimeout(() => resolve(isValidEmail(value)), 2000));
    const email = useValidation(props.email, emailValidation);

    const validateAsync = async () => {
        await email.validate(email.value);
    };
      
    useEffect(() => {
        validateAsync();
    }, []);

    return (
        <div>
            <input defaultValue={email.value}></input>
            <p>{email.value}</p>
            {email.error && <p className="invalid">Invalid email</p>}
        </div>
    );
};

export default EmailComponentWithRemoteValidation;