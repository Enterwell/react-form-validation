import { test, expect } from '@playwright/experimental-ct-react';
import EmailComponentWithLocalValidation from '../tests/ct/EmailComponentWithLocalValidation';
import { isValidEmail } from './validationFunctions';
import EmailComponentWithRemoteValidation from '../tests/ct/EmailComponentWithRemoteValidation';
import EmailComponentWithFields from '../tests/ct/EmailComponentWithFields';
import EmailComponentWithSubmit from '../tests/ct/EmailComponentWithSubmit';
import { useValidation } from './useValidation';
import { submitForm } from './formUtils';
import { useEffect } from 'react';

const emailValidationRemote = (value: string) => new Promise<boolean>((resolve) => setTimeout(() => resolve(isValidEmail(value)), 2000));
const testEmailValid = "matej.radovix@enterwell.net";
const testEmailInvalid = "matej.radovix";

test.use({ viewport: { width: 500, height: 500 } });

test.describe('useValidation', () => {
    test('localValid', async ({ mount }) => {
        const component = await mount(<EmailComponentWithLocalValidation email={testEmailValid} />);
        await expect(component).toContainText(testEmailValid);
    });

    test('localInvalid', async ({ mount }) => {
        const component = await mount(<EmailComponentWithLocalValidation email={testEmailInvalid} />);
        await expect(component.locator('.invalid')).toBeVisible();
    });

    test('remoteValid', async ({ mount }) => {
        const component = await mount(<EmailComponentWithRemoteValidation email={testEmailValid} />);
        await expect(component).toContainText(testEmailValid);
        await expect(component.locator('.invalid')).not.toBeVisible();
    });

    test('remoteInvalid', async ({ mount }) => {
        const component = await mount(<EmailComponentWithRemoteValidation email={testEmailInvalid} />);
        await expect(component.locator('.invalid')).toBeVisible();
    });

    test('validate_localValid_setValue', async ({ mount }) => {
        const Component = () => {
            const email = useValidation('', isValidEmail);

            useEffect(() => {
                email.setValue(testEmailValid);
                if (email.value) {
                    email.validate(email.value);
                }
            }, [email]);

            return (
                <div>
                    <input defaultValue={email.value}></input>
                    <p>{email.value}</p>
                    {email.error && <p className="invalid">Invalid email</p>}
                </div>
            )
        };

        const component = await mount(<Component />);
        await expect(component).toContainText(testEmailValid);
        await expect(component.locator('.invalid')).not.toBeVisible();
    });
});

test.describe('formUtils', () => {
    test('validateFields_localValid', async ({ mount }) => {
        let result;
        const component = await mount(
            <EmailComponentWithFields
                email={testEmailValid}
                emailValidation={isValidEmail}
                onValidateFields={(r: unknown) => result = r}
            />
        );
        await component.evaluate(() => { });
        expect(result).toBe(false);
    });

    test('validateFields_localInvalid', async ({ mount }) => {
        let result;
        const component = await mount(
            <EmailComponentWithFields
                email={testEmailInvalid}
                emailValidation={isValidEmail}
                onValidateFields={(r: unknown) => result = r}
            />
        );
        await component.evaluate(() => { });
        expect(result).toBe(true);
    });

    test('validateFields_remoteValid', async ({ mount }) => {
        let result;
        await mount(
            <EmailComponentWithFields
                email={testEmailValid}
                emailValidation={emailValidationRemote}
                onValidateFields={(r) => result = r}
            />
        );
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(result).toBe(false);
    });

    test('validateFields_remoteInvalid', async ({ mount }) => {
        let result;
        await mount(
            <EmailComponentWithFields
                email={testEmailInvalid}
                emailValidation={emailValidationRemote}
                onValidateFields={(r) => result = r}
            />
        );
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(result).toBe(true);
    });

    test('submitForm_localValid', async ({ mount }) => {
        let values = {};
        await mount(
            <EmailComponentWithSubmit
                email={testEmailValid}
                emailValidation={isValidEmail}
                onFormSubmit={(r) => values = r}
            />
        );
        await new Promise(resolve => setTimeout(resolve, 100));
        expect(values).not.toHaveLength(0);
    });

    test('submitForm_localInvalid', async ({ mount }) => {
        let values = {};
        await mount(
            <EmailComponentWithSubmit
                email={testEmailInvalid}
                emailValidation={isValidEmail}
                onFormSubmit={(r) => values = r}
            />
        );
        await new Promise(resolve => setTimeout(resolve, 100));
        expect(values).toHaveLength(0);
    });

    test('submitForm_remoteValid', async ({ mount }) => {
        let values = {};
        await mount(
            <EmailComponentWithSubmit
                email={testEmailValid}
                emailValidation={emailValidationRemote}
                onFormSubmit={(r) => values = r}
            />
        );
        await new Promise(resolve => setTimeout(resolve, 2000));
        expect(values).not.toHaveLength(0);
    });

    test('submitForm_remoteInvalid', async ({ mount }) => {
        let values = {};
        await mount(
            <EmailComponentWithSubmit
                email={testEmailInvalid}
                emailValidation={emailValidationRemote}
                onFormSubmit={(r) => values = r}
            />
        );
        await new Promise(resolve => setTimeout(resolve, 2000));
        expect(values).toHaveLength(0);
    });

    test('submitForm_localValidReturnValues', async ({ mount }) => {
        const expectedResult = { result: 'ok' };
        let result = null;

        await mount(<LocalValidComponent />);
        expect(result).toEqual(expectedResult);
    });

    test('submitForm_localInvalidReturnValues', async ({ mount }) => {
        const expectedResult = { result: 'ok' };
        let result = null;

        await mount(<LocalInvalidComponent />);
        expect(result).toBeUndefined();
    });

    test('submitForm_remoteValidReturnValues', async ({ mount }) => {
        const expectedResult = { result: 'ok' };
        let result = null;

        await mount(<RemoteValidComponent />);
        await new Promise(resolve => setTimeout(resolve, 2000));
        expect(result).toEqual(expectedResult);
    });
});

const LocalValidComponent = () => {
    const email = useValidation(testEmailValid, isValidEmail);
    useEffect(() => {
        result = submitForm({ email }, () => expectedResult);
    }, []);
    return <div />;
};

const LocalInvalidComponent = () => {
    const email = useValidation(testEmailInvalid, isValidEmail);
    useEffect(() => {
        result = submitForm({ email }, () => expectedResult);
    }, []);
    return <div />;
};

const RemoteValidComponent = () => {
    const email = useValidation(testEmailValid, emailValidationRemote);
    useEffect(() => {
        async function validateAndSubmit() {
            result = await submitForm({ email }, () => expectedResult);
        }
        validateAndSubmit();
    }, []);
    return <div />;
};