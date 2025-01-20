///<reference types="cypress" />
describe("traversal commands test suite",()=>{
    beforeEach(()=>{
        cy.visit('https://example.cypress.io')
    })
    it("traversal commands page",()=>{
        cy.contains("Commands").click() // click on commands dropdown
        cy.get('.dropdown-menu>li:nth-child(2)').click() //select the second element in the dropdown menu - traversal 
        cy.url().should('eq','https://example.cypress.io/commands/traversal') //checking that is the resulting url is matches with traversal url or not (https://example.cypress.io/commands/traversal)
        cy.get('h1').should('have.text','Traversal')
    })
    it('children command in traversal',()=>{
        // it traceout children of the current selection 
        cy.contains("Commands").click() // click on commands dropdown
        cy.get('.dropdown-menu>li:nth-child(2)').click() //select the second element in the dropdown menu - traversal 
       
        cy.get('.traversal-breadcrumb')
          .children('.active')
          .should('contain', 'Data')
    })
    
    it('closest()- ancestor command in traversal',()=>{
        // it traceout children of the current selection 
        cy.contains("Commands").click() // click on commands dropdown
        cy.get('.dropdown-menu>li:nth-child(2)').click() //select the second element in the dropdown menu - traversal 
        cy.get('.traversal-badge')
        .closest('div')
        .should('have.class', 'well')
         })
})