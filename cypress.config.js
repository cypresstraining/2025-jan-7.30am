const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
experimentalStudio:true,
experimentalWebKitSupport:true,
    video:true,
    experimentalRunAllSpecs:true,
    //testIsolation:false,
    //trashAssetsBeforeRuns:false,
    //screenshotsFolder:"Ram/Screenshots",
    //videosFolder:"Ram/Videos",
    //screenshotOnRunFailure:false,
    /*retries:{
     openMode:2,
     runMode:1
    },
    *///{ openMode: null, runMode: 2 }
    //includeShadowDom:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
