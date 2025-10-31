import Registro from '../support/helpers/Registro'
import Compra from '../support/helpers/Compra'
import compraData from '../fixtures/compra/compraData.json'

describe('Compra', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Caso de teste 15: Place Order: Register before Checkout', () => {
        const usuario = compraData.novoUsuario
        const cartaoCredito = compraData.cartaoCredito
        const produto = compraData.produto
        const randomUser = `cypress_${new Date().getTime()}`
        
        cy.contains('a', 'Signup / Login').click()
        Registro.sendBasicData(randomUser, `${randomUser}@test.com`)
        Registro.registroNovoUsuario(user)
        cy.contains('a', 'Continue').click()
        cy.contains(`Logged in as ${randomUser}`).should('be.visible')

        Compra.addProductToCart(produto)
        cy.contains('a', 'Proceed To Checkout').click()

        cy.contains('h2', 'Review Your Order').should('be.visible')
        Compra.confirmOrderDetails('Rs. 600', 'Please deliver between 9 AM to 5 PM.')

        cy.url().should('include', '/payment')
        Compra.submitCreditCardData(cartaoCredito)

        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
    })
})