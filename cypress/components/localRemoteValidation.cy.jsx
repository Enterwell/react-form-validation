import React from 'react';
import { mount } from '@cypress/react18';
import { isValidEmail } from '../../src';
import EmailComponentWithFields from '../testComponents/EmailComponentWithFields.jsx';
import EmailComponentWithLocalValidation from '../testComponents/EmailComponentWithLocalValidation.jsx';
import EmailComponentWithRemoteValidation from '../testComponents/EmailComponentWithRemoteValidation.jsx';
import EmailComponentWithSubmit from '../testComponents/EmailComponentWithSubmit.jsx';

const emailValidationRemote = (value) => new Promise((resolve) => setTimeout(() => resolve(isValidEmail(value)), 2000));
const testEmailValid = "matej.radovix@enterwell.net";
const testEmailInvalid = "matej.radovix";

describe('True is True', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    });
});

describe('useValidation', () => {
    it('validate_localValid', () => {
        mount(<EmailComponentWithLocalValidation email={testEmailValid} />);
        cy.contains(testEmailValid);
        cy.get(".invalid").should("not.exist");
    });

    it('validate_localInvalid', () => {
        mount(<EmailComponentWithLocalValidation email={testEmailInvalid} />);
        cy.get(".invalid").should("be.visible");
    });

    it('validate_remoteValid', () => {
        mount(<EmailComponentWithRemoteValidation email={testEmailValid} />);
        cy.wait(2000).contains(testEmailValid);
        cy.get(".invalid").should("not.exist");
    });

    it('validate_remoteInvalid', () => {
        mount(<EmailComponentWithRemoteValidation email={testEmailInvalid} />);
        cy.wait(2000).get(".invalid").should("be.visible");
    });
});

describe('formUtils', () => {
    it('validateFields_localValid', () => {
        const handleValidateFields = (r) => expect(r).eq(false);
        mount(<EmailComponentWithFields email={testEmailValid} emailValidation={isValidEmail} onValidateFields={handleValidateFields} />)
    });

    it('validateFields_localInvalid', () => {
        const handleValidateFields = (r) => expect(r).eq(true);
        mount(<EmailComponentWithFields email={testEmailInvalid} emailValidation={isValidEmail} onValidateFields={handleValidateFields} />)
    });

    it('validateFields_remoteValid', () => {
        let result = false;
        const handleValidateFields = (r) => result = r;
        mount(<EmailComponentWithFields email={testEmailValid} emailValidation={emailValidationRemote} onValidateFields={handleValidateFields} />)
        cy.wait(3000).then(() => {
            expect(result).to.be.false;
        });
    });

    it('validateFields_remoteInvalid', () => {
        let result = false;
        const handleValidateFields = (r) => result = r;
        mount(<EmailComponentWithFields email={testEmailInvalid} emailValidation={emailValidationRemote} onValidateFields={handleValidateFields} />)
        cy.wait(3000).then(() => {
            expect(result).to.be.true;
        });
    });

    it('submitForm_localValid', () => {
        let values = [];
        const handleFormSubmit = (r) => values = r;
        mount(<EmailComponentWithSubmit email={testEmailValid} emailValidation={isValidEmail} onFormSubmit={handleFormSubmit} />)
        cy.wait(100).then(() => {
            expect(values).to.not.be.empty;
        });
    });

    it('submitForm_localInvalid', () => {
        let values = [];
        const handleFormSubmit = (r) => values = r;
        mount(<EmailComponentWithSubmit email={testEmailInvalid} emailValidation={isValidEmail} onFormSubmit={handleFormSubmit} />)
        cy.wait(100).then(() => {
            expect(values).to.be.empty;
        });
    });

    it('submitForm_remoteValid', () => {
        let values = [];
        const handleFormSubmit = (r) => values = r;
        mount(<EmailComponentWithSubmit email={testEmailValid} emailValidation={emailValidationRemote} onFormSubmit={handleFormSubmit} />)
        cy.wait(2000).then(() => {
            expect(values).to.not.be.empty;
        });
    });

    it('submitForm_remoteInvalid', () => {
        let values = [];
        const handleFormSubmit = (r) => values = r;
        mount(<EmailComponentWithSubmit email={testEmailInvalid} emailValidation={emailValidationRemote} onFormSubmit={handleFormSubmit} />)
        cy.wait(2000).then(() => {
            expect(values).to.be.empty;
        });
    });
});