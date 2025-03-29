// copy and paste step names correctly into the stepDefintions 
// write the code for the step definitions
import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import mycypressacademyCustomerLogin from '../../Pages/myCypressAcademyCustomerLoginPage'
beforeEach(function(){
    cy.fixture('mycypress').as('testdata')
})
const myCypressAcademyCustomerLoginPage=new mycypressacademyCustomerLogin()

Given('User is on the login page', function () {
  // copy the Given step  in to the Given definiton name 
//browse the website 
myCypressAcademyCustomerLoginPage.browseURL()
myCypressAcademyCustomerLoginPage.clickLogin()
})
When('User login with valid credential', function () {
    // with in login page enter email , passowrd 
myCypressAcademyCustomerLoginPage.performLogin(this.testdata.email,this.testdata.password)

})
When('User click on the My account Link', function () {
    //myCypressAcademyCustomerLoginPage.clickMyaccount()
})
When('User click on the logout Link', function () {
    myCypressAcademyCustomerLoginPage.cllickLogout()

})
Then('User should be routed back to Home page', function () {
myCypressAcademyCustomerLoginPage.VerifyLogout()
})
  