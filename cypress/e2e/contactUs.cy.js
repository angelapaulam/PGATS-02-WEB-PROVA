import ContactUs from '../support/helpers/ContactUs'
import ContactUsData from '../fixtures/contactUs/ContactUsData.json'

describe('Contact Us', () => {
    beforeEach(() => {
        cy.visit('/')
        ContactUs.accessPageViaMenu()
    })

    it('Test Case 6: Contact Us Form', () => {
        const form = ContactUsData.form

        ContactUs.sendForm(form)
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
    })
})