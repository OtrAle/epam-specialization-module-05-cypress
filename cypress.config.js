const { defineConfig } = require("cypress");

module.exports = defineConfig({
    allowCypressEnv: false,

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'Practice Software Testing',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },

    e2e: {
        baseUrl: 'https://practicesoftwaretesting.com/',
        defaultCommandTimeout: 10000,
        retries: {
            runMode: 1,
            openMode: 0
        },
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});