class ContactUs {
    accessPageViaMenu() {
        cy.contains('a', 'Contact us').click()
        cy.url().should('include', '/contact_us')
        cy.contains('h2', 'Get In Touch').should('be.visible')
    }

    sendForm(form) {
        cy.get('input[data-qa=name]').type(form.name)
        cy.get('input[data-qa=email]').type(form.email)
        cy.get('input[data-qa=subject]').type(form.subject)
        cy.get('textarea[data-qa=message]').type(form.message, { delay: 0 })
        cy.get('input[name=upload_file]').selectFile(form.filePath)
        cy.get('[data-qa=submit-button]').click()
    }
}

export default new ContactUs