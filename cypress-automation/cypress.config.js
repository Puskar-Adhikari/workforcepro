const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // replace with actual app URL
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
