class Login {
    accessPageViaMenu() {
        cy.contains('a', 'Signup / Login').click()
        cy.url().should('include', '/login')
        cy.contains('h2', 'Login to your account').should('be.visible')
    }

    doLogin(email, password) {
        cy.get('[data-qa=login-email]').type(email)
        cy.get('[data-qa=login-password]').type(password)
        cy.contains('button', 'Login').click()
    }
}

export default new Login