import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
// import LoginPage from '../../support/pageObjects/LoginPage'
// let loginPageObj = new LoginPage()

Given('User is at the login page', () => {
    cy.visit(Cypress.config().baseUrl)
})

// When('User enters username as {​​​​​​​​string}​​​​​​​​ and password as {​​​​​​​​string}​​​​​​​​', (username, password) => {
//     //    loginPageObj.userNameTextBox().type(username)
//     //    loginPageObj.passwordTextBox().type(password)
//     cy.get('input[placeholder="User Name"]').type(username);
//     cy.get('input[type="password"]').type(password);
// })
When('User enters username and password', () => {
    //   loginPageObj.userNameTextBox().type(username)
    //   loginPageObj.passwordTextBox().type(password)
   cy.get('input[placeholder="User Name"]').type("unidoadmin");
   clearcy.get('input[type="password"]').type("admin123");
})

And('User clicks on login button', () => {
    //    loginPageObj.loginButton().click()
    cy.get('.my-4').click();
})

Then('User is able to successfully login to the Website', () => {
    cy.get('#welcome').should('be.visible', { timeout: 10000 })
    LoginPage.
})
