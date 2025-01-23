///<reference types="cypress"/>
describe("invoke test suite",()=>{
    /*beforeEach(()=>{
        cy.visit("")
    })*/

    it("invoke show and trigger",()=>{
        const fn = (a, b, c) => {
            return a + b + c
          }
          
          cy.wrap({ sum: fn })
            .invoke('sum', 2, 4, 6)
            .should('be.gt', 10) // true
            .and('be.lt', 20) // true
    })
    it("play with new tabs by using invoke",()=>{
        //cypress be default not able to handle child tabs
  cy.visit("https://example.cypress.io/utilities")  
  //you are in the utilitie page 
  // in this utilities page we need to click on docs.cypress.io
 cy.contains("docs.cypress.io")
  .invoke("removeAttr","target")//open the link in the same tab so that cypress will happily execute the remaining tests in the same page
  .click()
  cy.url().should('eq',"https://docs.cypress.io/api/utilities/_")
  cy.get("#Syntax").should("contain",'Syntax')
    })
})