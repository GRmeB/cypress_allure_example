/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
// ***********************************************************
// This example plugins/index.ts can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/// <reference types="cypress-xpath" />

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
import * as path from 'path';
const browserify = require('@cypress/browserify-preprocessor');
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { preprocessor } from '@badeball/cypress-cucumber-preprocessor/browserify';
const fs = require('fs');
const dotenvPlugin = require('cypress-dotenv');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const del = require('del');

export default async (
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> => {
    const options = {
        ...browserify.defaultOptions,
        typescript: path.join(path.resolve('..'), 'node_modules/typescript'),
    };

    on('file:preprocessor', await preprocessor(config, options));

    await addCucumberPreprocessorPlugin(on, config);

    /*
    on('after:screenshot', (details: { path: string }) => {
        console.log(details); // print all details to terminal

        const newPath = details.path.replace('|', '').replace('  ', ' ');

        return new Promise((resolve, reject) => {
            // fs.rename moves the file to the existing directory 'new/path/to'
            // and renames the image to 'screenshot.png'
            fs.rename(details.path, newPath, (err: any) => {
                if (err) return reject(err);

                // because we renamed and moved the image, resolve with the new path
                // so it is accurate in the test results
                resolve({ path: newPath });
            });
        });
    });
     */

    require('cypress-grep/src/plugin')(config);
    require('cypress-log-to-output').install(on);
    require('@cypress/code-coverage/task')(on, config);
    config = dotenvPlugin(config);

    if (config.env.USE_MOCHA === true) {
        config.e2e.specPattern = 'cypress/e2e/mocha/**/*.js';
        allureWriter(on, config);
    }

    /*
    on(
        'after:spec',
        (spec, results) => {
            if (results && results.stats.failures === 0 && results.video) {
                return del(results.video);
            }
        }
    );
     */

    //return require('@bahmutov/cypress-extends')(config.configFile);
    return config;
};
