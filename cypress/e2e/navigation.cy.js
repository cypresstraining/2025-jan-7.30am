describe("navigations commands",()=>{
    it("back/forward",()=>{
        cy.visit("https://example.cypress.io")
        cy.visit("https://example.cypress.io/commands/navigation")
        cy.url().should('eq','https://example.cypress.io/commands/navigation')
        cy.go('back')
        cy.url().should('eq','https://example.cypress.io/')
        cy.visit("https://example.cypress.io/commands/viewport")
        cy.url().should('eq','https://example.cypress.io/commands/viewport')
        cy.go('back')
        cy.url().should('eq','https://example.cypress.io/')
        cy.go('forward')
        cy.url().should('eq','https://example.cypress.io/commands/viewport')
       cy.go(-1)
       cy.go(1)
       //cy.reload()
       cy.reload(true)
       /*
cy.visit('http://localhost:3000/admin')
cy.get('#undo-btn').click().should('not.be.visible')
cy.reload() //reload like a user reload by using reload button in the browser
cy.get('#undo-btn').click().should('not.be.visible')
       */

/*
Force Reload
Reload the page without using the cache
cy.visit('http://localhost:3000/admin')
cy.reload(true)
*/
        
    })
    it("view port",()=>{
        cy.visit("https://example.cypress.io/commands/assertions")
        cy.viewport("ipad-2")
        cy.viewport(300,300)
        cy.viewport("iphone-3","landscape")
        cy.viewport("iphone-3","portrait")

        /*
        The viewport determines the width and height of your application under test. 
        By default the viewport will be 1000px by 660px for end-to-end testing.

        Additionally, you can override this value in your cypress.config.js or 
        via the cy.viewport() command.


        */
    })
})