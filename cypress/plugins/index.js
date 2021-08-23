/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
//module.exports = (on, config) => {
// `on` is used to hook into various events Cypress emits
// `config` is the resolved Cypress config


//for adding tags to test
const selectTestsWithGrep = require('cypress-select-tests/grep')

//For Cucumber Integration
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = (on, config) => {
  on('file:preprocessor', selectTestsWithGrep(config)) // adding tags to the test
  on('file:preprocessor', cucumber()) // for cypress cucumber preprocessor
}




