import Pagina from '../support/helpers/Pagina'
import { faker } from '@faker-js/faker'

describe('Pagina', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Caso de teste 10: Verify Subscription in home page', () => {
        const email = faker.internet.email()

        Home.subscribeOnNewsletter(email)
        cy.contains('You have been successfully subscribed!').should('be.visible')
    })
})