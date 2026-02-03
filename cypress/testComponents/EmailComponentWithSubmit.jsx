import React, { useEffect } from 'react';
import { submitForm, useValidation } from '../../src';

const EmailComponentWithSubmit = (props) => {
    const email = useValidation(props.email, props.emailValidation);

    useEffect(() => {
        submitForm([email], props.onFormSubmit)
    }, []);

    return (<div id="empty_id"></div>);
}

export default EmailComponentWithSubmit;