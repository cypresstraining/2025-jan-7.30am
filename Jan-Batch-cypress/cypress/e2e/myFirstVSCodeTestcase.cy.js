// cypress test specs have the extension .cy.js 
describe('My first test suite from VScode',()=>{

// in this block we can write any number of it block or common code for
//  the test suite

xit('My first test case',()=>{

    // here we need to write the first test case code 
cy.visit('https://example.cypress.io')
  
// -  one line comment in JS 
/* ......*/  //multiple lines Comment
/*
@see — https://on.cypress.io/visit

@example

   cy.visit('http://localhost:3000')
   cy.visit('/somewhere') // opens ${baseUrl}/somewhere
   cy.visit({
     url: 'http://google.com',
     method: 'POST'
   })


*/

// cypress test cases are independent by default - test isolation true 
// first test case output do not impact second test case 
// in first test case you logged into website that does not carry forward to the second test case
// again you need to login in the second test case ->  test isolation 
// every test is a fresh test. 

})
it('my second test case ', ()=>{
    // we need to write second test case code 
    cy.visit('https://example.cypress.io')

    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(6) > a').click();
    cy.get('h1').should('be.visible');
    cy.get('h1').should('have.text', 'Location');
    cy.get('.container > p').should('be.visible');
    cy.get('.container > p').should('have.text', 'Examples of get the url within your application in Cypress, for a full reference of commands, go to docs.cypress.io\n      ');
    cy.get('#hash').click();
    cy.get('#hash > a').should('be.visible');
    cy.get('#hash > a').should('have.attr', 'href', 'https://on.cypress.io/hash');
    cy.get('#hash > a').should('have.text', 'cy.hash()');
    /* ==== End Cypress Studio ==== */
})
it.skip("third test case",()=>{
    //this is my third test case code 
    cy.visit('https://example.cypress.io')

    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').click()
    cy.url().should('eq','https://example.cypress.io/utilities')

})


})