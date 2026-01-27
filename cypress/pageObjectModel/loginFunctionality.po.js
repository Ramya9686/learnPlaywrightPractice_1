import credentials from '../fixtures/credentials.json'

class LoginPage {
webLocators = {
 usernameInput : 'input[name="username"]',
 passwordInput : 'input[name="password"]',
 loginBtnInput : 'button[type="submit"]',
 dashboardPage : 'Dashboard',
 invalidCredsError : 'Invalid credentials'

}

//Actions

loginWithValidCreds() {
    cy.get(this.webLocators.usernameInput).type(credentials.validUsername)
    cy.get(this.webLocators.passwordInput).type(credentials.validPassword)
    cy.get(this.webLocators.loginBtnInput).click()
}

verifyDashboardPage () {
    cy.contains(this.webLocators.dashboardPage).should('be.visible')
}

loginWithInvalidUserName () {
    cy.get(this.webLocators.usernameInput).type(credentials.invalidUsername)
    cy.get(this.webLocators.passwordInput).type(credentials.validPassword)
    cy.get(this.webLocators.loginBtnInput).click()
}

verifyInvalidCredsError () {
    cy.contains(this.webLocators.invalidCredsError).should('be.visible')
}

loginWithInvalidPassword () {
    cy.get(this.webLocators.usernameInput).type(credentials.validUsername)
    cy.get(this.webLocators.passwordInput).type(credentials.invalidPassword)
    cy.get(this.webLocators.loginBtnInput).click()
}

loginWithInvalidCreds () {
    cy.get(this.webLocators.usernameInput).type(credentials.invalidUsername)
    cy.get(this.webLocators.passwordInput).type(credentials.invalidPassword)
    cy.get(this.webLocators.loginBtnInput).click()
}
}

export default new LoginPage
