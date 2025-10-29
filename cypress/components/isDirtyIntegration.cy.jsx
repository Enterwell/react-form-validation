import React, { useEffect, useState } from 'react';
import { mount } from '@cypress/react18';
import { useValidation, isDirty, setValues, isNonEmptyString, isValidEmail } from '../../src';

describe('isDirty integration test - Complete workflow', () => {
    it('should demonstrate Save button enable/disable with isDirty', () => {
        const Component = () => {
            const [loaded, setLoaded] = useState(false);
            const [formData] = useState(() => ({
                name: useValidation('', isNonEmptyString),
                email: useValidation('', isValidEmail)
            }));
            
            const hasChanges = isDirty(formData);

            // Simulate loading data from an API
            useEffect(() => {
                setTimeout(() => {
                    setValues(formData, {
                        name: 'John Doe',
                        email: 'john@example.com'
                    });
                    setLoaded(true);
                }, 100);
            }, [formData]);

            return (
                <div>
                    {loaded && (
                        <>
                            <input data-testid="name" {...formData.name.props} />
                            <input data-testid="email" {...formData.email.props} />
                            <button 
                                data-testid="save" 
                                disabled={!hasChanges}
                            >
                                Save
                            </button>
                            <p data-testid="dirty">{hasChanges.toString()}</p>
                        </>
                    )}
                </div>
            );
        };

        mount(<Component />);

        // Initially loading, no button
        cy.get('[data-testid="save"]').should('not.exist');

        // After data loads, button should be disabled (no changes yet)
        cy.wait(150);
        cy.get('[data-testid="save"]').should('be.disabled');
        cy.get('[data-testid="dirty"]').should('have.text', 'false');

        // After user makes a change, button should be enabled
        cy.get('[data-testid="name"]').clear().type('Jane Doe');
        cy.get('[data-testid="save"]').should('not.be.disabled');
        cy.get('[data-testid="dirty"]').should('have.text', 'true');

        // After reverting to original value, button should be disabled again
        cy.get('[data-testid="name"]').clear().type('John Doe');
        cy.get('[data-testid="save"]').should('be.disabled');
        cy.get('[data-testid="dirty"]').should('have.text', 'false');

        // Changing another field should enable the button
        cy.get('[data-testid="email"]').clear().type('jane@example.com');
        cy.get('[data-testid="save"]').should('not.be.disabled');
        cy.get('[data-testid="dirty"]').should('have.text', 'true');
    });
});
