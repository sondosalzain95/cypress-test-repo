import CreateNewUserAPIRequest from "@pageObjects/creatnewuser";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LogInPageActions from "../../../../pageObjects/LogInPage/actions";
import LogInPageAssertions from '../../../../pageObjects/LogInPage/assertions';



const createUser = new CreateNewUserAPIRequest()
const loginActions = new LogInPageActions()
const loginAssertions = new LogInPageAssertions()


Given("The system has a user", () => {
    createUser.createNewUser('Sondos Hisham', 'SondosHisham', 'Soso@5df91995', 'sondos@testtesttt.com')

})

Given("The user opens login page", () => {
    loginActions.openLoginPage()

})

Given("Types in user name input field", () => {
    loginActions.tpyeInUsernameInputField('cypressUser')
})

Given("Types in user password input field", () => {

    loginActions.typeInPasswordInputField('R3656wp')
})

Given("Types in invalid user name input field", () => {

    loginActions.tpyeInUsernameInputField('sondos')
})

When("Types in invalid password input field", () => {

    loginActions.typeInPasswordInputField('ggggggg')
})

When('Clicks on the Sign In button', () => {
    loginActions.clickOnSignInButton()
    cy.wait(10000);
})

Then('Home page should be open', () => {
    loginAssertions.checkHomePageIsOpen('cypressUser')
})

Then('Error message should be visible Please fill in this field', () => {
    loginAssertions.checkValidationMessageIsVisible(true)
})

Then('Shuold see pop up error message Invalid UserNmae Or Password', () => {
    loginAssertions.checkInvalidUserNameOrPasswprd()
})

Then('Delete the new user', () => {
    createUser.deleteUser('SondosHisham')

})



