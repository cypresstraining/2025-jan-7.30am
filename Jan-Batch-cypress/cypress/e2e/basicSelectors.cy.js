describe('My basic selectors test suite',()=>{


    it('Tag name selector - CSS selector cy.get("tagname")',()=>{

        cy.log('This is my first test case by using cy.get("tagname")')
        cy.visit('https://example.cypress.io')
        cy.get('html').should('be.visible')
        cy.get('h1').should('be.visible')
        cy.get('p').should('be.visible')
        cy.get('div').should('be.visible')
        cy.get('ul').should('be.visible')
        cy.get('li').should('be.visible')
        cy.get('h2').should('be.visible')
        cy.get('a').should('be.visible')

    })
    it("class name selector - in basic selector",()=>{
        //classname selector  -    <ul class="home-list">
        //.class name with in the cy.get('.classname')
        cy.visit('https://example.cypress.io')
        cy.get('.home-list').should('be.visible')
        cy.get('.banner-alt').should('be.visible')
        cy.get('.nav.navbar-nav.pull-right')
        cy.get('.dropdown-menu').should('not.be.visible')
        cy.get('.navbar-collapse.collapse')
        cy.get('.navbar-brand')
        cy.get('.navbar-header')


    })

    it('ID CSS selector to locate the element in cypress',()=>{
        //ID selector is detected by # cy.get('#id') -   <div id="navbar" 
        cy.visit('https://example.cypress.io')
        cy.get('#navbar') // cypress will look for element which is having id=navbar
        cy.get('#utilities')


    })
    it('attribute selectors',()=>{
        // rel="icon" class="classname"  id=myID
        cy.visit('https://example.cypress.io')
        cy.get('[rel="icon"]')
        cy.get('[href="https://www.cypress.io"]')
        cy.get('[href="https://github.com/cypress-io/cypress-example-kitchensink"]')
    })
})