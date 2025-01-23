///<reference types="cypress" />

describe("select test suite to automate dropdowns",()=>{
    beforeEach(()=>{
        cy.visit("https://example.cypress.io/commands/actions")
    })
    it("select one element from dropdown",()=>{
    //select the dropdown UI element and check their default text present in the dropdown 
    // to test that we need to use have.value assertion
    cy.get('.action-select')//this is used to select the dropdown
    .should('have.value', '--Select a fruit--')//this is to add an assertion to validate it 
     // Select option(s) with matching text content
     cy.get('.action-select').select('apples')
     cy.get('.action-select')//this is used to select the dropdown
    .should('have.value', 'fr-apples')

    })
    it("select multiple values from dropdown",()=>{
        cy.get('.action-select-multiple') // selection of multiple dropdown
        .select(['apples','oranges', 'bananas'])

        cy.get('.action-select-multiple')
  // when getting multiple values, invoke "val" method first
  .invoke('val') //if you end here then it will execute only once 
  //if you have chanined command then it will execute multiple times 

  .should('deep.equal', ['fr-apples','fr-oranges','fr-bananas'])
    })
})