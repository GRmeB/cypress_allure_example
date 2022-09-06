// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
import 'cypress-wait-until';
import '@testing-library/cypress/add-commands';

Cypress.Commands.add(
    'clearAndType',
    (locator, text, numberOfElement = 0, waitTime = 0) => {
        cy.wait(waitTime);
        cy.get(locator).eq(numberOfElement).clear({ force: true });
        cy.get(locator).eq(numberOfElement).type(text, { force: true });
    }
);

Cypress.Commands.add('visitAndWait', (url, waitTime) => {
    cy.visit(url);
    cy.wait(waitTime);
});

Cypress.Commands.add('waitForApplicationToBeReady', () => {
    cy.wait(2000);
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
