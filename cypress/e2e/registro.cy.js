import Register from '../support/helpers/Register'
import registerData from '../fixtures/register/registerData.json'

describe('Register', () => {
    beforeEach(() => {
        cy.visit('/')
        Register.accessPageViaMenu()
    })

    it('Caso de teste  1: Register User', () => {
        const user = registerData.newUser
        const randomUser = `cypress_${new Date().getTime()}`
        
        Register.sendBasicData(randomUser, `${randomUser}@test.com`)
        Register.registerNewUser(user)
        cy.contains('.title', 'Account Created!').should('be.visible')
        cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible')
    })

    it('Caso de teste 5: Register User with existing email', () => {
        const user = registerData.registredUser

        Register.sendBasicData(user.username, user.email)
        cy.contains('Email Address already exist!').should('be.visible')
    })
})