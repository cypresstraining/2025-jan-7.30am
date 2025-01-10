const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio:true,
    //testIsolation:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
