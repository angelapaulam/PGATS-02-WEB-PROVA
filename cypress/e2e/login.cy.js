import Login from '../support/helpers/Login'
import LoginData from '../fixtures/login/loginData.json'

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
        Login.accessPageViaMenu()
    })

    it('Test Case 2: Login User with correct email and password', () => {
        const user = LoginData.validUser

        Login.doLogin(user.email, user.password)

        cy.contains(`Logged in as ${user.name}`).should('be.visible')
        cy.contains('a', 'Logout').should('be.visible')
    })

    it('Test Case 3: Login User with incorrect email and password', () => {
        const user = ({...LoginData.validUser, password: 'wrongpassword'})

        Login.doLogin(user.email, user.password)

        cy.contains('Your email or password is incorrect!').should('be.visible')
    })

    it('Test Case 4: Logout User', () => {
        const user = LoginData.validUser

        Login.doLogin(user.email, user.password)

        cy.contains(`Logged in as ${user.name}`).should('be.visible')
        cy.contains('a', 'Logout').click()
        cy.contains('a', 'Signup / Login').should('be.visible')
    })
})