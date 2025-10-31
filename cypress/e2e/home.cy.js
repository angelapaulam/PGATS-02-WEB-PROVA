import Home from '../support/helpers/Home'
import { faker } from '@faker-js/faker'

describe('Home', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Caso de teste 10: Verify Subscription in home page', () => {
        const email = faker.internet.email()

        Home.subscribeOnNewsletter(email)
        cy.contains('You have been successfully subscribed!').should('be.visible')
    })
})