import Product from '../support/helpers/Product'
import productData from '../fixtures/product/productData.json'

describe('Product', () => {
    beforeEach(() => {
        cy.visit('/')
        Product.accessPageViaMenu()
    })

    it('Test Case 8: Verify All Products and product detail page', () => {
        const product = productData.product

        cy.contains('.productinfo', product.name)
            .closest('.product-image-wrapper')
            .find('a[href*="/product_details/"]')
            .click()
        
        cy.contains('h2', product.name).should('be.visible')
        cy.contains(product.value).should('be.visible')
        cy.contains(`Brand: ${product.brand}`).should('be.visible')
    })

    it('Test Case 9: Search Product', () => {
        const product = productData.product

        Product.searchProduct(product.name)
        
        cy.contains('h2', 'Searched Products').should('be.visible')
        cy.get('.productinfo').should('have.length', 1)
        cy.contains('.productinfo', product.name).should('be.visible')
        cy.contains(product.value).should('be.visible')
    })
})