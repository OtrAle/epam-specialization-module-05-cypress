const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  
  e2e: {
    baseUrl: 'https://practicesoftwaretesting.com/',
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 2,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});