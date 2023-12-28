const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  execTimeout: 30000,
  pageLoadTimeout: 60000,
  reporter: "cypress-multi-reporters",
  chromeWebSecurity: false,

  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },

  retries: {
    runMode: 1,
    openMode: 1,
  },

  video: false,
  screenshotsFolder: "cypress/reports/screenshots",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
