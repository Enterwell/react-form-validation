import { useEffect } from 'react';
import { submitForm, useValidation } from '../../src';
import type { Field, FieldsValues } from '../../src/formUtils';

type EmailForm = {
    email: Field<string>
};

const EmailComponentWithSubmit = ({ email, emailValidation, onFormSubmit }: {
    email: string,
    emailValidation: (email: string) => boolean | Promise<boolean>,
    onFormSubmit: (values: FieldsValues<EmailForm>) => void
}) => {
    const form: EmailForm = {
        email: useValidation(email, emailValidation)
    }

    useEffect(() => {
        submitForm(form, onFormSubmit);
    }, []);

    return (<div></div>);
}

export default EmailComponentWithSubmit;