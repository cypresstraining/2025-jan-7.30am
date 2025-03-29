describe("exceptions",()=>{

    it("first test",()=>{
        cy.visit('https://example.cypress.io')
    })
    it("second test",()=>{

        cy.visit('https://playwright.io')
    })
    it('different domain',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            cy.visit('http://localhost')
            return false
          })
       
    })
})