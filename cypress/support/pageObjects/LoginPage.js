export default class LoginPage {
    userNameTextBox = () => cy.get('input[placeholder="User Name"]');
    passwordTextBox = () => cy.get('input[type="password"]');
    loginButton = () => cy.get('.my-4');
}
