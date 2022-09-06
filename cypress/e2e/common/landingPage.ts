import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given('the user opens the github webpage', () => {
    // @ts-ignore
    cy.visit(Cypress.config('sites')[0].sites[0].url);
    cy.get('elementDoesNotExist').should('be.visible');
});
