class Compra {
    addProductToCart(produto) {
        cy.contains('.productinfo', produto.name)
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

    submitCreditCardData(cartaoCredito) {
        cy.get('input[data-qa=name-on-card]').type(cartaoCredito.nameOnCard)
        cy.get('input[data-qa=card-number]').type(cartaoCredito.cardNumber)
        cy.get('input[data-qa=cvc]').type(cartaoCredito.cvc)
        cy.get('input[data-qa=expiry-month]').type(cartaoCredito.expirationMonth)
        cy.get('input[data-qa=expiry-year]').type(cartaoCredito.expirationYear)
        cy.contains('button', 'Pay and Confirm Order').click()
    }
}

export default new Compra