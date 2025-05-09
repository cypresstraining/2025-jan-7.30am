///<reference types="cypress" />
describe('shadow dom',{includeShadowDom:true},()=>{
    it('shadow dom at suite level enabled',()=>{
        cy.visit('http://watir.com/examples/shadow_dom')
        cy.get('#shadow_host')
        //.shadow()       //
        .find('#shadow_content').find('.info').should('contain','some text')
        cy.get('#shadow_host')
        //.shadow()//to allow cypress to dig more into  shadow root 
        .find('#nested_shadow_host')
        //.shadow()//to allow cypress to dig into child shadow root 
        .find('#nested_shadow_content').should('contain','nested text')
    })

    it('shadow dom at suite level enabled',()=>{
        cy.visit('http://watir.com/examples/shadow_dom')
        cy.get('#shadow_host')
      //  .shadow()
        .find('#shadow_content').find('.info').should('contain','some text')
        cy.get('#shadow_host')
        //.shadow()
        .find('#nested_shadow_host')
      //  .shadow()
        .find('#nested_shadow_content').should('contain','nested text')
    })
})