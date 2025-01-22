describe("checkbox test suite",()=>{
    beforeEach(()=>{
        cy.visit("https://example.cypress.io/commands/actions")
    })
    it("to check checkboxes ",()=>{

        // By default, .check() will check all
// matching checkbox or radio elements in succession, one after another
cy.get('.action-checkboxes [type="checkbox"]')
.not('[disabled]')
.check()

cy.get('.action-checkboxes [type="checkbox"]')
.not('[disabled]')
.should('be.checked')
cy.get('.action-checkboxes [type="checkbox"]')
.not('[disabled]').uncheck()
cy.get('.action-checkboxes [type="checkbox"]')
.not('[disabled]')
.should('not.be.checked')
 
  })
  it("radio button test",()=>{
    
cy.get('.action-radios [type="radio"]').not('[disabled]').check()
cy.get('.action-radios [type="radio"]').not('[disabled]').should('be.checked')

// .check() accepts a value argument
cy.get('.action-radios [type="radio"]').check('radio1')
cy.get('#optionsRadios1').should("be.checked")

cy.get('.action-radios [type="radio"]').should('be.checked')
cy.get('.action-radios [type="radio"]').check('radio2')
cy.get('#optionsRadios1').should("not.be.checked")
cy.get("#optionsRadios2").should('be.checked')

// .check() accepts an array of values
cy.get('.action-multiple-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox2'])
cy.get('.action-multiple-checkboxes [type="checkbox"]').should('be.checked')

// Ignore error checking prior to checking
cy.get('.action-checkboxes [disabled]').check({ force: true })
cy.get('.action-checkboxes [disabled]').should('be.checked')

cy.get('.action-radios [type="radio"]').check('radio3', { force: true })
cy.get('.action-radios [type="radio"]').should('be.checked')
  
  })
})