//import the Given, When, Then cucumber step definitons from cypress-cucumber-preprocessor

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

//we created all our selecttors and actions with in the Page or POM counduitLoginPage.js under Pages folder

import CounduitLoginPage from '../../Pages/counduitLoginPage'

//Capturing the test data from json file counduitLoginData.json


beforeEach(function(){
    cy.fixture('conduitLoginData').as('data')
     //loading the data from json file
})
const counduitLoginPage =new CounduitLoginPage() //create an object for the CounduitLoginPage class

Given('User is on the login pages', function () {
  counduitLoginPage.browseURL() //open the URL from browseURL method
  counduitLoginPage.clickOnSign()//Clickn on Sign button through clickOnSign() method
})

When('User login with valid credentials', function () {
    counduitLoginPage.enterValidEmail(this.data.email) //type the email from counduitLogin.json fiel through fixture and enterValidEmail method from counditLoginPage.js file

    counduitLoginPage.enterValidPassword(this.data.password)
    //in the above step we are calling the method enterValidPassword from counduitLoginPage.js file and counduitLogin.json file

    counduitLoginPage.clickOnLoginButton()
    //inn the above step we are clicking on Loginbutton with the help of clickOnLoginButton
    
})

When('User click on the settings button', function () {
    counduitLoginPage.clickOnSettings()//click on settings option by suing  clickOnSettings
})

When('User click on the logout button', function () {
  counduitLoginPage.clickOnLogoutButton()//click on Logout button
})

Then('User should be routed back to login page', function () {
    counduitLoginPage.verifyResults()//assertons from verifyResults
})