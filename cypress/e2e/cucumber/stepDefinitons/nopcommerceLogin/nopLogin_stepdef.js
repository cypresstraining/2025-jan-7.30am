import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

//loading the step definitons in the current test 
import nopLoginPage from "../../Pages/nopcommerceLogin"
//importing the nopLoginPage class file 

beforeEach(function(){
    cy.fixture('nopLogin').as('data') //aliasing the data exist in the json file as 'this.data.adminEmail'
})
const nopLoginPage1 =new nopLoginPage() //object creation
Given('User is on the nopcommerce login page', function () {
nopLoginPage1.browseURL()  //browsing the nopcommerce URL
nopLoginPage1.clickOnLoginLink() //click on Login to access the Login page
})

When('nopcommerce login with valid credentials', function () {
    nopLoginPage1.enterEmail(this.data.adminEmail) //retrieve the nopLogin.json file data
    nopLoginPage1.enterPassword(this.data.adminPassword) //retrieve password
    nopLoginPage1.selectRememberMe() //click on checkbox Remember me?
    nopLoginPage1.clickOnLogin() //click on Login button to initiate the login operation
})

When('User click on the nopcommerce logout button', function () {
nopLoginPage1.clickOnLogout() //after successful Login - cusotmer is able to see Logout option
})

Then('User should be routed back to nopcommerce page', function () {
   nopLoginPage1.verifyResults() //assertions 
   //Is Register link is avaialble 
   //is Login link is avaialble 
})