import React, { useEffect } from 'react';
import { submitForm } from '../../src/formUtils';
import { useValidation } from '../../src/useValidation';

const EmailComponentWithSubmit = (props) => {
    const email = useValidation(props.email, props.emailValidation);

    useEffect(() => {
        submitForm([email], props.onFormSubmit)
    }, []);

    return (<div></div>);
}

export default EmailComponentWithSubmit;