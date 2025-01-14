const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports", // Directory for the report files
    overwrite: false,            // Do not overwrite existing reports
    html: true,                  // Generate an HTML report
    json: true                   // Generate a JSON report
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      cypress/e2e/*/*.spec.js
    },
  },
});
