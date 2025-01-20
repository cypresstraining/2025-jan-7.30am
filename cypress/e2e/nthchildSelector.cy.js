///<reference types="cypress"/>
describe("nth-child css selector test suite",()=>{
    beforeEach(()=>{
        cy.visit('https://example.cypress.io/')
    })
    it("first child selector ",()=>{
        cy.get('body>nav>div>div:first-child').click()
        cy.url().should('eq','https://example.cypress.io/')
        cy.get('h1').should('have.text','Kitchen Sink')

        cy.contains('Commands').click()
        cy.get('.dropdown-menu > li').eq(0) //first element 
        cy.get('.dropdown-menu > li').first() 
    })
    it("last child selector",()=>{
        cy.contains('Commands').click()
        cy.get('.dropdown-menu > li').eq(-1) //first element 
        cy.get('.dropdown-menu > li').last() 
        cy.get('body>nav>div>div:last-child>ul:last-child>li:last-child>').click()

    })
    it("nth child selector ",()=>{
        cy.contains('Commands').click()
    cy.get('.dropdown-menu > li').eq(0) //first element 
    cy.get('.dropdown-menu > li').first() //locate the first element in the results list 
    cy.get('.dropdown-menu > li').eq(1) //locate the specific element in the list based on the index you provided 
    //index starts with zero
    cy.get('.dropdown-menu > li').eq(16) 
    cy.get('.dropdown-menu > li').last()//locate the last element in the results list 
     
    //Get A DOM element at a specific index in an array of elements.
    //index start with 0
  //css nth child concept onstead of eq 
          cy.get('.dropdown-menu > li:nth-child(1)')
          cy.get('.dropdown-menu > li:nth-child(2)')
          cy.get('.dropdown-menu > li:nth-child(17)')


    })
})