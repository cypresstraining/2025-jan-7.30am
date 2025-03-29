
const { defineConfig } = require("cypress");
const sqlServer = require('cypress-sql-server');
const cucumber = require('cypress-cucumber-preprocessor').default
import { allureCypress } from "allure-cypress/reporter";

module.exports = defineConfig({
  projectId: "yo9zrb",//this will provide the flexibility to the cypress app to connect with cloud 


  e2e: {
experimentalStudio:true,
experimentalWebKitSupport:true,
experimentalOriginDependencies:true,
    video:true,
    experimentalRunAllSpecs:true,
    baseUrl:'https://jsonplaceholder.typicode.com/',
    responseTimeout:60000,
    specPattern: "cypress/e2e/cucumber/feature/*.feature",
    //"**/*.feature"
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
      on('file:preprocessor', cucumber())
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
      // implement node event listeners here
      // Database configuration
      config.db = {
        userName: "db_ab6037_n4705_1_admin",
        //db_ab6037_n4705_1_admin
        //username to connect to the databse
        password: "Welcome@0508",
        //password to connect the DB
        server: "sql1002.site4now.net",
        //sql1002.site4now.net - server URL
        options: {
          database: "db_ab6037_n4705_1",
          // this which database we are trying to connect 
          encrypt: true,
          rowCollectionOnRequestCompletion: true,
        },
        
      };

      // Load SQL Server plugin
      const tasks = sqlServer.loadDBPlugin(config.db);
      on("task", tasks);


      
    },
  },
});
