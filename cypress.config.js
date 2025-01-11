const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio:true,
    experimentalWebKitSupport: true,
    video:true,
    //testIsolation:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
