///<reference types="cypress" />
describe('Ecommerce new customer registration',()=>{
beforeEach(()=>{
    cy.visit('http://ramanasoft123-001-site1.anytempurl.com/',{
        auth: {
            username: '11211719',
            password: '60-dayfreetrial',
        }
    })
   
})
    it('Browser the Register page and check the URL',()=>{
        /*cy.visit('http://ramanasoft123-001-site1.anytempurl.com/',{
            auth: {
                username: '11211719',
                password: '60-dayfreetrial',
            } // to get out of autherization issue in the cy.visit() we are supplying auth {}
            //Cypress will automatically apply the right authorization headers if you're attempting to visit an application that requires Basic Authentication.
        })//visit the homepage*/

        cy.get('.ico-register').click() //Locate the register link through the classname selector and perform click action 
        cy.url().should('eq','http://ramanasoft123-001-site1.anytempurl.com/register?returnUrl=%2F')
        // cy.url() store the current URL of the application 
        //should('eq') => is used to match your URL with expected URL mentioned in the code

    })
    it('How to enter the Registrationd details in your ecommerce application',()=>{
         cy.get('[href="/register?returnUrl=%2F"]').click()
        cy.get('h1').should('have.text','Register') //locate the element with tagname h1 and 
        //add an assertion to check the text present in the h1 tag - have.text => add exact match 
       cy.get('strong').should('contain','Your Personal Details')
       //contain is used to match the content present in your code with actual content 
       cy.contains('Gender:') // is this label exist or not 
       cy.get('#gender-male').check()
       cy.get('#gender-female').check() // select the element 
       //cy.get('#gender-female').uncheck() // remove the selection of the element 
       cy.get('#gender-male').check()
// in radio button , if you select one option automatically other option will be unchecked 
// so no need of explicit uncheck() in your code 
//but if it is the checknbox, we have to uncheck perticular selection manually 

        cy.get('[for="FirstName"]').should('have.contain','First name:')
        cy.get('#FirstName').type('ram') //text box type 
        cy.get('[for="LastName"]').should('contain','Last name:')
        cy.get('#LastName').type('prasad') //textbox type
        cy.get('#Email').type('qtramprasad2@gmail.com') //textbox -type
        cy.get('#Company').type('QualityThought') // textbox - type
        cy.get('#Newsletter').uncheck() //checkbox to deselect - uncheck() // to select -check()
        cy.get('#Password').type('123456') //it is a text box -perfrom type action
        cy.get('#ConfirmPassword').type('123456') //as it is a textbox perfrom type action
        cy.get('#register-button').click() //as it is a button perfrom click action
       cy.get('.result').should('contain','Your registration completed')
       cy.contains('Continue').click()
    })
})