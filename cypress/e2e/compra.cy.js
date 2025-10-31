import Register from '../support/helpers/Register'
import Order from '../support/helpers/Order'
import orderData from '../fixtures/order/orderData.json'

describe('Order', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Caso de teste 15: Place Order: Register before Checkout', () => {
        const user = orderData.newUser
        const creditCard = orderData.creditCard
        const product = orderData.product
        const randomUser = `cypress_${new Date().getTime()}`
        
        cy.contains('a', 'Signup / Login').click()
        Register.sendBasicData(randomUser, `${randomUser}@test.com`)
        Register.registerNewUser(user)
        cy.contains('a', 'Continue').click()
        cy.contains(`Logged in as ${randomUser}`).should('be.visible')

        Order.addProductToCart(product)
        cy.contains('a', 'Proceed To Checkout').click()

        cy.contains('h2', 'Review Your Order').should('be.visible')
        Order.confirmOrderDetails('Rs. 600', 'Please deliver between 9 AM to 5 PM.')

        cy.url().should('include', '/payment')
        Order.submitCreditCardData(creditCard)

        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
    })
})