import React, { useEffect, useState } from 'react';
import { mount } from '@cypress/react18';
import { useValidation, isDirty, setValues, isNonEmptyString } from '../../src';

describe('isDirty functionality', () => {
    describe('useValidation isDirty property', () => {
        it('should be false initially', () => {
            const Component = () => {
                const field = useValidation('initial', isNonEmptyString);
                
                return (
                    <div>
                        <p data-testid="isDirty">{field.isDirty.toString()}</p>
                    </div>
                );
            };

            mount(<Component />);
            cy.get('[data-testid="isDirty"]').should('have.text', 'false');
        });

        it('should be true after onChange', () => {
            const Component = () => {
                const field = useValidation('initial', isNonEmptyString);
                
                return (
                    <div>
                        <input data-testid="input" {...field.props} />
                        <p data-testid="isDirty">{field.isDirty.toString()}</p>
                    </div>
                );
            };

            mount(<Component />);
            cy.get('[data-testid="isDirty"]').should('have.text', 'false');
            cy.get('[data-testid="input"]').clear().type('changed');
            cy.get('[data-testid="isDirty"]').should('have.text', 'true');
        });

        it('should be false after onChange back to initial value', () => {
            const Component = () => {
                const field = useValidation('initial', isNonEmptyString);
                
                return (
                    <div>
                        <input data-testid="input" {...field.props} />
                        <p data-testid="isDirty">{field.isDirty.toString()}</p>
                    </div>
                );
            };

            mount(<Component />);
            cy.get('[data-testid="isDirty"]').should('have.text', 'false');
            cy.get('[data-testid="input"]').clear().type('changed');
            cy.get('[data-testid="isDirty"]').should('have.text', 'true');
            cy.get('[data-testid="input"]').clear().type('initial');
            cy.get('[data-testid="isDirty"]').should('have.text', 'false');
        });

        it('should remain false after setValue', () => {
            const Component = () => {
                const field = useValidation('', isNonEmptyString);
                const [clicked, setClicked] = useState(false);
                
                useEffect(() => {
                    if (clicked) {
                        field.setValue('newInitial');
                    }
                }, [clicked]);
                
                return (
                    <div>
                        <input data-testid="input" {...field.props} />
                        <button data-testid="button" onClick={() => setClicked(true)}>Set Value</button>
                        <p data-testid="isDirty">{field.isDirty.toString()}</p>
                        <p data-testid="value">{field.value}</p>
                    </div>
                );
            };

            mount(<Component />);
            cy.get('[data-testid="isDirty"]').should('have.text', 'false');
            cy.get('[data-testid="button"]').click();
            cy.get('[data-testid="value"]').should('have.text', 'newInitial');
            cy.get('[data-testid="isDirty"]').should('have.text', 'false');
        });

        it('should be true after setValue then onChange', () => {
            const Component = () => {
                const field = useValidation('', isNonEmptyString);
                const [clicked, setClicked] = useState(false);
                
                useEffect(() => {
                    if (clicked) {
                        field.setValue('newInitial');
                    }
                }, [clicked]);
                
                return (
                    <div>
                        <input data-testid="input" {...field.props} />
                        <button data-testid="button" onClick={() => setClicked(true)}>Set Value</button>
                        <p data-testid="isDirty">{field.isDirty.toString()}</p>
                    </div>
                );
            };

            mount(<Component />);
            cy.get('[data-testid="button"]').click();
            cy.get('[data-testid="isDirty"]').should('have.text', 'false');
            cy.get('[data-testid="input"]').clear().type('changed');
            cy.get('[data-testid="isDirty"]').should('have.text', 'true');
        });

        it('should be false after reset', () => {
            const Component = () => {
                const field = useValidation('initial', isNonEmptyString);
                
                return (
                    <div>
                        <input data-testid="input" {...field.props} />
                        <button data-testid="reset" onClick={() => field.reset()}>Reset</button>
                        <p data-testid="isDirty">{field.isDirty.toString()}</p>
                    </div>
                );
            };

            mount(<Component />);
            cy.get('[data-testid="input"]').clear().type('changed');
            cy.get('[data-testid="isDirty"]').should('have.text', 'true');
            cy.get('[data-testid="reset"]').click();
            cy.get('[data-testid="isDirty"]').should('have.text', 'false');
        });
    });

    describe('isDirty helper function', () => {
        it('should return false when no fields are dirty', () => {
            let result = null;

            const Component = () => {
                const email = useValidation('initial@test.com', isNonEmptyString);
                const name = useValidation('Initial Name', isNonEmptyString);
                
                useEffect(() => {
                    result = isDirty({ email, name });
                }, []);
                
                return <div></div>;
            };

            mount(<Component />);
            cy.then(() => {
                expect(result).to.be.false;
            });
        });

        it('should return true when at least one field is dirty', () => {
            let result = null;

            const Component = () => {
                const email = useValidation('initial@test.com', isNonEmptyString);
                const name = useValidation('Initial Name', isNonEmptyString);
                const [changed, setChanged] = useState(false);
                
                useEffect(() => {
                    if (changed) {
                        result = isDirty({ email, name });
                    }
                }, [changed]);
                
                return (
                    <div>
                        <input data-testid="email" {...email.props} />
                        <button data-testid="change" onClick={() => {
                            email.onChange('changed@test.com', { receiveEvent: false });
                            setChanged(true);
                        }}>Change</button>
                    </div>
                );
            };

            mount(<Component />);
            cy.get('[data-testid="change"]').click();
            cy.then(() => {
                expect(result).to.be.true;
            });
        });

        it('should return false after setValues is called', () => {
            let result = null;

            const Component = () => {
                const email = useValidation('', isNonEmptyString);
                const name = useValidation('', isNonEmptyString);
                const [loaded, setLoaded] = useState(false);
                
                useEffect(() => {
                    // Simulate loading data from API
                    setValues({ email, name }, {
                        email: 'loaded@test.com',
                        name: 'Loaded Name'
                    });
                    setLoaded(true);
                }, []);

                useEffect(() => {
                    if (loaded) {
                        result = isDirty({ email, name });
                    }
                }, [loaded]);
                
                return <div></div>;
            };

            mount(<Component />);
            cy.wait(100).then(() => {
                expect(result).to.be.false;
            });
        });

        it('should return true after setValues then user changes a field', () => {
            let result = null;

            const Component = () => {
                const email = useValidation('', isNonEmptyString);
                const name = useValidation('', isNonEmptyString);
                const [loaded, setLoaded] = useState(false);
                const [changed, setChanged] = useState(false);
                
                useEffect(() => {
                    // Simulate loading data from API
                    setValues({ email, name }, {
                        email: 'loaded@test.com',
                        name: 'Loaded Name'
                    });
                    setLoaded(true);
                }, []);

                useEffect(() => {
                    if (changed) {
                        result = isDirty({ email, name });
                    }
                }, [changed]);
                
                return (
                    <div>
                        <input data-testid="email" {...email.props} />
                        <button data-testid="change" onClick={() => {
                            email.onChange('changed@test.com', { receiveEvent: false });
                            setChanged(true);
                        }}>Change</button>
                    </div>
                );
            };

            mount(<Component />);
            cy.wait(100);
            cy.get('[data-testid="change"]').click();
            cy.then(() => {
                expect(result).to.be.true;
            });
        });
    });
});
