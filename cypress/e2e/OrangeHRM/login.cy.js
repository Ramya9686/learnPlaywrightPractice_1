import loginCredentials from "../../fixtures/credentials.json"

describe('verify login functionality', () => {
    it("login with valid credentials", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type(loginCredentials.validUsername)
        cy.get('input[name="password"]').type(loginCredentials.validPassword)
        cy.get('button[type="submit"]').click()
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.contains('Dashboard').should('be.visible')

    })

      it("login with invalid userName", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type(loginCredentials.invalidUsername)
        cy.get('input[name="password"]').type(loginCredentials.validPassword)
        cy.get('button[type="submit"]').click()
        cy.contains('Invalid credentials').should('be.visible')

    })
    it("login with invalid password", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type(loginCredentials.validUsername)
        cy.get('input[name="password"]').type(loginCredentials.invalidPassword)
        cy.get('button[type="submit"]').click()
        cy.contains('Invalid credentials').should('be.visible')

    })

     it("login with invalid credentials", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type(loginCredentials.invalidUsername)
        cy.get('input[name="password"]').type(loginCredentials.invalidPassword)
        cy.get('button[type="submit"]').click()
        cy.contains('Invalid credentials').should('be.visible')

    })



})