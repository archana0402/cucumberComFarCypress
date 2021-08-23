// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
//-- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
import LoginPage from '../support/pageObjects/LoginPage'
let loginPageObj = new LoginPage()
Cypress.Commands.add('login', (username, password) => {
    loginPageObj.userNameTextBox().type(username)
    loginPageObj.passwordTextBox().type(password)
    loginPageObj.loginButton().click()
    cy.wait(2000)
    console.log("Login Done Successfully")
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
