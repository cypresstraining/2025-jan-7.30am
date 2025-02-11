///<reference types="cypress" />
describe('shadow dom',()=>{
    it('shadow dom not enabled',()=>{
        cy.visit('http://watir.com/examples/shadow_dom')
        cy.get('#shadow_host')
        .shadow()       //
        .find('#shadow_content').find('.info').should('contain','some text')
        cy.get('#shadow_host')
        .shadow()//to allow cypress to dig more into  shadow root 
        .find('#nested_shadow_host')
        .shadow()//to allow cypress to dig into child shadow root 
        .find('#nested_shadow_content').should('contain','nested text')
    })

    it('shadow dom not enabled',()=>{
        cy.visit('http://watir.com/examples/shadow_dom')
        cy.get('#shadow_host')
      .shadow()
        .find('#shadow_content').find('.info').should('contain','some text')
        cy.get('#shadow_host')//shadow host element we traceout 
        .shadow() //allowing travesal permission to cypress
        .find('#nested_shadow_host')//again we have shadow-root 
        .shadow()//allow me to traversal  into inner html 
        .find('#nested_shadow_content').should('contain','nested text')
    })
})