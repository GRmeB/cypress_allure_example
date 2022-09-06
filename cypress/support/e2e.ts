/* eslint-disable no-undef */
require('cypress-plugin-tab');

// ***********************************************************
// This example support/index.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.ts using ES2015 syntax:
//import * as path from 'path';
//const fs = require('fs');
require('cypress-xpath');
const registerCypressGrep = require('cypress-grep');
registerCypressGrep();

import './commands';
import '@cypress/code-coverage/support';
import '@shelex/cypress-allure-plugin';

//Cypress.on('uncaught:exception', () => false);
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});

/*
afterEach(() => {
    const newSuiteName =
        window.testState.gherkinDocument.feature.name +
        ' ' +
        Cypress.config('sites')[0].sites[0].name;

    cy.allure().suite(newSuiteName);
});
 */

/*
Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        const screenshot = `assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
        addContext({ test }, screenshot.replace('|', '').replace('  ', ' '));
    }
});
 */

// Alternatively you can use CommonJS syntax:
// require('./commands')
