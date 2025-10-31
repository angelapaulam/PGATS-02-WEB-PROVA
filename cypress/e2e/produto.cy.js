import Produto from '../support/helpers/Produto'
import produtoData from '../fixtures/product/produtoData.json'

describe('Produto', () => {
    beforeEach(() => {
        cy.visit('/')
        Product.accessPageViaMenu()
    })

    it('Caso de teste 8: Verify All Products and product detail page', () => {
        const produto = produtoData.produto

        cy.contains('.productinfo', product.name)
            .closest('.product-image-wrapper')
            .find('a[href*="/product_details/"]')
            .click()
        
        cy.contains('h2', product.name).should('be.visible')
        cy.contains(product.value).should('be.visible')
        cy.contains(`Brand: ${product.brand}`).should('be.visible')
    })

    it('Caso de teste 9: Search Product', () => {
        const product = productData.product

        Product.searchProduct(product.name)
        
        cy.contains('h2', 'Searched Products').should('be.visible')
        cy.get('.productinfo').should('have.length', 1)
        cy.contains('.productinfo', product.name).should('be.visible')
        cy.contains(product.value).should('be.visible')
    })
})