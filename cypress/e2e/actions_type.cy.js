///<reference types="cypress" />
describe("type command test suite",()=>{
    beforeEach(()=>{
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it("different options exist in type command",()=>{

        cy.get('.action-email').type('qtramprasad@gmail.com')
        cy.get('.action-email').should('have.value', 'qtramprasad@gmail.com')
 //have.value is used to test the typed characters - holding text we need to verify 

        // .type() with special character sequences
        cy.get('.action-email')
        .type('{leftarrow}ram') //use left arrow

        cy.get('.action-email').type('{rightarrow}')
        cy.get('.action-email').type('{uparrow}')
        cy.get('.action-email').type('{downarrow}')
        cy.get('.action-email').type('{del}{selectall}{backspace}')
        
        // .type() with key modifiers
        cy.get('.action-email').type('{alt}{option}') //these are equivalent
        cy.get('.action-email').type('{ctrl}{control}') //these are equivalent
        cy.get('.action-email').type('{meta}{command}{cmd}') //these are equivalent
        cy.get('.action-email').type('{shift}')
        
        // Delay each keypress by 0.1 sec
        cy.get('.action-email').type('slow.typing@email.com', { delay: 100 })
        cy.get('.action-email').should('have.value', 'slow.typing@email.com')
        
        cy.get('.action-disabled')
          // Ignore error checking prior to type
          // like whether the input is visible or disabled
          .type('disabled error checking', { force: true })//eventhough the textbox is disabled if you want to type in that textbox you can use {force:true}

        cy.get('.action-disabled').should('have.value', 'disabled error checking') 
    })
    it.only('Focus & blur',()=>{
        cy.get('.action-focus').focus()//Focus on a DOM element.
cy.get('.action-focus').should('have.class', 'focus')//verify the class name of the yeilded subject
  .prev().should('have.attr', 'style', 'color: orange;')//verify the selected yeilded subject - styles 

  cy.get('.action-blur').type('About to blur')
cy.get('.action-blur').blur()
cy.get('.action-blur').should('have.class', 'error')
  .prev().should('have.attr', 'style', 'color: red;')

  //clear
  cy.get('.action-email').type('qtramprasad@gmail.com').clear()
    })
})