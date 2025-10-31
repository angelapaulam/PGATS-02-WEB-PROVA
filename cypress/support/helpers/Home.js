class Home {
    subscribeOnNewsletter(email) {
        cy.get('input#susbscribe_email').type(email)
        cy.get('button#subscribe').click()
    }
}

export default new Home