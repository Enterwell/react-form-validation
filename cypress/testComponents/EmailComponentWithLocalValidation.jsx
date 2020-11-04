import React, { useEffect } from 'react';
import { useValidation } from '../../src/useValidation';

const EmailComponentWithLocalValidation = (props) => {
    const emailValidation = (value) => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
    const email = useValidation(props.email, emailValidation);

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