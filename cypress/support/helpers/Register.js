class Register {
    accessPageViaMenu() {
        cy.contains('a', 'Signup / Login').click()
        cy.contains('h2', 'New User Signup!').should('be.visible')
    }

    sendBasicData(username, email) {
        cy.get('[data-qa=signup-name]').type(username)
        cy.get('[data-qa=signup-email]').type(email)
        cy.contains('button', 'Signup').click()
    }

    registerNewUser(user) {
        cy.contains('.title', 'Enter Account Information').should('be.visible')
        cy.get(`[data-qa=title] [value=${user.gender}]`).check()
        cy.get('[data-qa=password]').type(user.password)
        cy.get('[data-qa=first_name]').type(user.firstName)
        cy.get('[data-qa=last_name]').type(user.lastName)
        cy.get('[data-qa=address]').type(user.address)
        cy.get('[data-qa=country]').select(user.country)
        cy.get('[data-qa=state]').type(user.state)
        cy.get('[data-qa=city]').type(user.city)
        cy.get('[data-qa=zipcode]').type(user.zipcode)
        cy.get('[data-qa=mobile_number]').type(user.mobileNumber)
        cy.contains('button', 'Create Account').click()
    }
}

export default new Register