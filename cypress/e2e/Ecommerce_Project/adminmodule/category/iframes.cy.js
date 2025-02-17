
///<reference types="cypress" />
///<reference types="cypress-iframe" />

describe("",function(){
    it("iframe test",function(){
    cy.visit('https://kwh-kitchenwarehouse.netlify.app/checkout')
    cy.get('input[name="email"]').eq(0).type('testuser@example.com');
    cy.contains('Continue').click()
    cy.frameLoaded()
    cy.iframe('#number').type("1234123412341234")//this is not allowed why beacuse 
    //this element with #number inside of the iframe.
    //this element is not exposed to the cypress as it is inside of the iframe
    //to make it visible to the cypress tool 
    //1. install the cypress-iframe plugin 
    //2. cy.frameLoaded()
    //3.cy.iframe() 
    cy.origin()

    })


})