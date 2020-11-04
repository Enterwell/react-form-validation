import React, { useEffect } from 'react';
import { useValidation } from '../../src/useValidation';

const EmailComponentWithRemoteValidation = (props) => {
    const emailValidation = (value) => new Promise((resolve) => setTimeout(() => resolve(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)), 2000));
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