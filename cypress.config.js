const { defineConfig } = require("cypress");
const { cloudPlugin } = require('cypress-cloud/plugin');
const { debuggerPlugin } = require('cypress-debugger');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cloudPlugin(on, config);

      debuggerPlugin(on, config, {
        failedTestsOnly: false,
        targetDirectory: 'cypress-traces',
      });

      on('before:browser:launch', () => { console.log('\nTesting before:browser:launch\n'); });

      return config;
    },
    testIsolation: false
  },
});
