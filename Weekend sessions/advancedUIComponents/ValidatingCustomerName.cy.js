/// <reference types="cypress" />

describe('demo website from nopcommerce',()=>{

    beforeEach(()=>{
        cy.visit('http://cypresstesting7-001-site1.jtempurl.com/customer/addresses', {
            auth: {
              username: '11190287',
              password: '60-dayfreetrial',
            },
    
          })

          cy.fixture('loginData').as('data')

    })
    xit('New customer registration', function(){
    //1. Browse the nop website // through beforeEach hook we are browsing the website.
    cy.log("executing the beforeEach hook as a first step - in this hook we are browsing the web site ")

    //2. Click on Register option 
    cy.contains('Register').click()
    //through selectors hub  -  relitiveCSS selector is copied to traceout the UI component Register
    cy.get('.ico-register').click()
    cy.get('h1').should('contain',"Register")
    cy.get('form > :nth-child(1) > .title > strong').should('have.text',"Your Personal Details")
    //3. Enter all details in the registration for.
    //   Gender  => fill the gender as male 
    cy.get('[for="gender"]').should('have.text','Gender:')
    cy.get('label[for="gender-female"]').click()
    cy.get('.male').click()
    //Enter the first name 
    cy.get(':nth-child(1) > .form-fields > :nth-child(2) > label').should('contain','First name:')
    cy.get('#FirstName').clear().type("Ram")
    //Enter the last name
    cy.get(':nth-child(3) > label').should('contain',"Last name:")
    cy.get('#LastName').clear().type("Prasad")
    //enter the email 
    cy.get(':nth-child(4) > label').should('include.text',"Email")
    //cy.get('[type="Email"]').first().should('have.value','qtramprasad3@gmail.com')
    cy.get('[type="Email"]').first().clear().type('qtramprasad101@gmail.com')
    cy.get('[type="Email"]').first().should('have.value','qtramprasad101@gmail.com')
    //enter company details
    cy.get('form > :nth-child(2) > .title > strong').should('have.text',"Company Details")
    cy.get(':nth-child(2) > .form-fields > .inputs > label').should('contain',"Company name:")
    cy.get('#Company').clear().type('QualityThought')
    cy.get('#Company').should("have.value","QualityThought")

    // select News letter
    cy.get('form > :nth-child(3) > .title > strong').should('include.text',"Options")
    cy.get(':nth-child(3) > .form-fields > .inputs > label').should('have.text',"Newsletter:")
    cy.get('#Newsletter').uncheck()
    cy.get('#Newsletter').check()
    // enter password 
    cy.get('#Password').clear().type("Secure*12")
   
    //re enter password 
    cy.get('#ConfirmPassword').clear().type("Secure*12")

    // in your practise do the below activites 

     // you can add negative test cases for mismatching the password 
    //validate the error message 
    // and upload to practise branch exist in the repo

    // click on Register button 
    cy.get('#register-button').click()
    // Expected  Result: Registration should be successful
    cy.get('.result').should("contain","Your registration completed")
  
    cy.get('.buttons > .button-1').should('be.visible')
    cy.get('.ico-account').should('be.visible')
    cy.get('.ico-logout').should('be.visible')
    cy.get('.wishlist-label').should('be.visible')
    cy.get('.cart-label').should('be.visible')
    cy.get('.buttons > .button-1').click()
    cy.get('h2').should('contain','Welcome to our store')
    cy.get('.topic-block-body > :nth-child(1)').should('contain',"Online shopping is the process consumers go through to purchase products or services over the Internet. You can edit this in the admin site.")
    cy.get('.topic-block-body > :nth-child(2)').should('contain','If you have questions, see the Documentation, or post in the Forums at nopCommerce.com')
    cy.get('.ico-account').should('be.visible')
    cy.get('.ico-logout').should('be.visible')
    cy.get('.wishlist-label').should('be.visible')
    cy.get('.cart-label').should('be.visible')
    cy.get('.ico-account').click()
    cy.get('li[class="customer-addresses active"] a').click()
    cy.get('div[class="section address-item"] strong').should('have.text',this.data.name)



        })

        xit('test name of the customer',function(){
          // cy.contains('Log out').click()
           cy.contains('Log in').click()

            cy.get('#Email').clear().type(this.data.email)
            cy.get('#Password').clear().type(this.data.password)
            cy.get('button[class="button-1 login-button"]').click()
            cy.get('.ico-account').click()
            //.get('.customer-addresses active').click()
      
            cy.get('div[class="section address-item"] strong').should('have.text',this.data.name)
 


        })

        it('check customer name',function(){
            cy.visit('http://cypresstesting7-001-site1.jtempurl.com/customer/addresses', {
                auth: {
                  username: '11190287',
                  password: '60-dayfreetrial',
                },
        
              })
            cy.get('div[class="section address-item"] strong').should('have.text','Ram Prasad')
            cy.get('div[class="section address-item"] strong').should('have.text',this.data.name)

        })
    })
