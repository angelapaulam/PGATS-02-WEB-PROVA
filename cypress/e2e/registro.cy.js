import Registro from '../support/helpers/Registro'
import registroData from '../fixtures/register/registroData.json'

describe('Registro', () => {
    beforeEach(() => {
        cy.visit('/')
        Register.accessPageViaMenu()
    })

    it('Caso de teste 1: Register User', () => {
        const usuario = registroData.newUser
        const randomUser = `cypress_${new Date().getTime()}`
        
        Registro.sendBasicData(randomUser, `${randomUser}@test.com`)
        Registro.registroNovoUsuario(user)
        cy.contains('.title', 'Account Created!').should('be.visible')
        cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible')
    })

    it('Caso de teste 5: Register User with existing email', () => {
        const user = registroData.registredUser

        Register.sendBasicData(user.username, user.email)
        cy.contains('Email Address already exist!').should('be.visible')
    })
})