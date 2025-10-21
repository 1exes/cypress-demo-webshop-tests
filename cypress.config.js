const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    // Base URL for the application under test
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://demowebshop.tricentis.com',

    // Viewport settings
    viewportWidth: 1920,
    viewportHeight: 1080,

    // Test execution settings
    testIsolation: true,
    watchForFileChanges: true,

    // Timeouts
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    requestTimeout: 10000,
    responseTimeout: 30000,

    // Retry configuration
    retries: {
      runMode: 2,      // Retry failed tests 2 times in CI
      openMode: 0      // Don't retry in interactive mode
    },

    // Video and screenshot settings
    video: true,
    videoCompression: 32,
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',

    // File patterns
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',

    // Environment variables from .env file
    env: {
      TEST_EMAIL: process.env.CYPRESS_TEST_EMAIL,
      TEST_PASSWORD: process.env.CYPRESS_TEST_PASSWORD,
      TEST_FIRST_NAME: process.env.CYPRESS_TEST_FIRST_NAME,
      TEST_LAST_NAME: process.env.CYPRESS_TEST_LAST_NAME,
      TEST_COMPANY: process.env.CYPRESS_TEST_COMPANY,
      TEST_ADDRESS: process.env.CYPRESS_TEST_ADDRESS,
      TEST_CITY: process.env.CYPRESS_TEST_CITY,
      TEST_ZIP: process.env.CYPRESS_TEST_ZIP,
      TEST_PHONE: process.env.CYPRESS_TEST_PHONE,
      TEST_CC_NUMBER: process.env.CYPRESS_TEST_CC_NUMBER,
      TEST_CC_HOLDER: process.env.CYPRESS_TEST_CC_HOLDER,
      TEST_CC_CVV: process.env.CYPRESS_TEST_CC_CVV,
    },

    // Browser settings
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      // Plugin event listeners can be added here
      // Example: on('task', { ... })

      return config;
    },
  },

  // Component testing configuration (if needed in future)
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
