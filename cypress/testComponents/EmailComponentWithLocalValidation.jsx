import React, { useEffect } from 'react';
import { useValidation, isValidEmail } from '../../src';

const EmailComponentWithLocalValidation = (props) => {
    const email = useValidation(props.email, isValidEmail);

    useEffect(() => {
       email.validate(email.value);
    }, []);
    
    return (
        <div>
            <input defaultValue={email.value}></input>
            <p>{email.value}</p>
            {email.error && <p className="invalid">Invalid email</p>}
        </div>
    );
};

export default EmailComponentWithLocalValidation;