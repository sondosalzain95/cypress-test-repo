class LogInPageActions {

    openLoginPage() {
        cy.visit(Cypress.config("baseUrl"))
    }

    tpyeInUsernameInputField(username: string) {
        return cy.get('input[type="text"]').type(username)
    }

    typeInPasswordInputField(userpassword: string) {
        return cy.get('input[type="password"]').type(userpassword)
    }

    clickOnSignInButton() {
        cy.get('.btn').contains('Sign In').click()
    }
}
export default LogInPageActions