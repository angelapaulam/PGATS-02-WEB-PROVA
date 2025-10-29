class Product {
    accessPageViaMenu() {
        cy.contains('a', 'Products').click()
        cy.url().should('include', '/products')
        cy.contains('h2', 'All Products').should('be.visible')
    }

    searchProduct(productName) {
        cy.get('input#search_product').type(productName)
        cy.get('button#submit_search').click()
    }
}

export default new Product