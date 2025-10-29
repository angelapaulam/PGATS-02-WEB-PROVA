class Order {
    addProductToCart(product) {
        cy.contains('.productinfo', product.name)
            .parent()
            .find('a', 'add-to-cart')
            .first()
            .click()
    
        cy.contains('a', 'View Cart').click()
    }

    confirmOrderDetails(amount, message) {
        cy.contains('Total Amount')
            .closest('tr')
            .find('.cart_total_price')
            .should('have.text', amount)

        cy.get('textarea[name=message]').type(message)
        cy.contains('a', 'Place Order').click()
    }

    submitCreditCardData(creditCard) {
        cy.get('input[data-qa=name-on-card]').type(creditCard.nameOnCard)
        cy.get('input[data-qa=card-number]').type(creditCard.cardNumber)
        cy.get('input[data-qa=cvc]').type(creditCard.cvc)
        cy.get('input[data-qa=expiry-month]').type(creditCard.expirationMonth)
        cy.get('input[data-qa=expiry-year]').type(creditCard.expirationYear)
        cy.contains('button', 'Pay and Confirm Order').click()
    }
}

export default new Order