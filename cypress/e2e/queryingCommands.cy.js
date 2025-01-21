///<reference types="cypress" />
describe("Querying commands test suite",()=> {

    beforeEach(()=>{
    //this hook will execute before every test as first statement then test body will execute 
    cy.visit("https://example.cypress.io")

    })
    it("get command to locate the element with css selector",()=>{
        cy.get('a[role="button"]').click()
        cy.get('li[class="dropdown open"] li:nth-child(1) a:nth-child(1)').click()
        cy.get('body > nav:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click()
        cy.get('body >nav >div >div:nth-child(2)>ul:nth-child(1)>li:nth-child(2)>a')
        cy.get('h1').should('have.text','Utilities')
        cy.get('body>nav>div>div:nth-child(2)>ul>li:last-child>a').click()
    })
    it("contains command to locate the element with css selector",()=>{
        cy.contains('Commands').click()
        cy.contains('Utilities').click()
        cy.contains('Cypress API').click()
        cy.get('.dropdown-toggle').click()
        cy.get('li').contains('Querying').click()
       // cy.get('.dropdown-toggle').click()
        cy.get('li').contains('Actions').click({force: true})
        //{force: true} is used to click on the subject when it is not available in display mode
                
    })
    it("within command ",()=>{
        cy.get('.dropdown-toggle').click()
        cy.contains('Querying').click()
      
            cy.log('i am out side of the with in and count for [type="text"]')
            cy.get('[type="text"]')
            cy.get('.form-control')
            //the above cy.get() is outside of within so it will search for entire document 


              //cy.get('form').within(($form) => {
        // cy.get() will only search for elements within form,
// not within the entire document
    //}
        cy.get('form').within(($form) =>{
            cy.log('I am inside of the withinn -notify the count for [type="text"]')
            cy.get('[type="text"]')// lets check howmany results 
            cy.get('#inputEmail').type('I am inside form')
            cy.get('.form-control')

        
       })
        
    })
    it("root command ",()=>{
        cy.get('.dropdown-toggle').click()
        cy.contains('Querying').click()
        cy.root().should("match","html")// if it is outside of within then html is root element



        cy.get('form').within(($form) =>{
            cy.log('I am inside of the withinn -current root element inside  of the with in is form')
            cy.root().should("match","form.query-form")// if it is inside of the form then root element is form


        
       })
        
    })
    //cy.get() through selectors we can traceout element 
    //cy.contains() through text search 
    //cy.get().within() cypress commands only look inside of the subject not look for out side of the subject 
    //cy.root()  which deals with current root elemnt of the subject .by default html is the root element 


})