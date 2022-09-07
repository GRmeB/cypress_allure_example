import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify';
const dotenvPlugin = require('cypress-dotenv');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    on(
        'file:preprocessor',
        browserify(config, {
            typescript: require.resolve('typescript'),
        })
    );

    allureWriter(on, config);
    await addCucumberPreprocessorPlugin(on, config);

    require('cypress-grep/src/plugin')(config);
    require('cypress-log-to-output').install(on);
    require('@cypress/code-coverage/task')(on, config);
    config = dotenvPlugin(config);

    if (config.env.USE_MOCHA === true) {
        config.specPattern = 'cypress/e2e/mocha/**/*.js';
    }

    return config;
}

export var configCommon: Cypress.ConfigOptions = {
    projectId: 'ccso',
    viewportWidth: 1000,
    viewportHeight: 660,
    pageLoadTimeout: 20000,
    defaultCommandTimeout: 10000,
    retries: {
        runMode: 0,
        openMode: 0,
    },
    env: {
        SITE_URL: '',
        USE_FRONTEND_PROD_TEST: false,
        USE_MOCHA: false,
        allure: false,
        allureResultsPath: 'cypress/reports/allure/json',
        allureLogCypress: true,
        allureAttachRequests: false,
        allureOmitPreviousAttemptScreenshots: false,
        allureClearSkippedTests: false,
        allureAddAnalyticLabels: false,
        allureAddVideoOnPass: false,
        allureReuseAfterSpec: true,
    },
    video: false,
    videoCompression: 48,
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    watchForFileChanges: false,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
        reporterEnabled: 'mocha-junit-reporter',
        mochaJunitReporterReporterOptions: {
            mochaFile: 'cypress/reports/junit/junit-report.xml',
            overwrite: false,
        },
    },
    e2e: {
        specPattern: 'cypress/e2e/**/*.feature',
        experimentalSessionAndOrigin: false,
        setupNodeEvents,
    },
};
