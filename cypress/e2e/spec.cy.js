///<reference types="cypress" />

describe('Test suite name ', () => {
  // describe is used to define the test suite in cypress  

  it('Test case 1', () => {
    // it is used to define the test case in cypress
    // to write the comment in java script or cypress 
    cy.visit('https://example.cypress.io')

    // is the first method or command we are using to open the web site 

  })

  it("second test ", ()=> {
cy.visit('https://example.cypress.io')
cy.get('.dropdown-toggle').click()
cy.get('.dropdown-menu > :nth-child(5) > a')
.click()
//cy.get('.dropdown-menu > :nth-child(1) > a').click()
cy.get('.dropdown-toggle').click()

cy.get('.dropdown-menu > :nth-child(11) > a').click()
cy.url().should('eq','https://example.cypress.io/commands/aliasing')

//cy.get('#navbar > :nth-child(1) > :nth-child(25) > a').click()
//1. Locate or select UI component in the system 
// as of now we are taking the help of cypress play ground and locate the element 
cy.get('#navbar > :nth-child(1) > :nth-child(2) > a')
//cy.get() is a command  used to locate the element by using CSS selector 
//2. Perfrom an action  => click() // type // check 
.click() 
//3. verify whether you expectation are met ? Assertions in the cypress 
//.should('exist')
//.should('be.visible')
//.should('contain','cypress')
//.should('have.value,'example@yourstore.com')
cy.url().should('eq','https://example.cypress.io/utilities')
cy.get('h1').should('exist')
cy.get('h1').should('have.text','Utilities')
cy.get('.container > p').should('exist')
  })

  it('myRecordedTest', function() {
    cy.visit('https://example.cypress.io');
    cy.get('#navbar > :nth-child(1) > :nth-child(3) > a').click();
    cy.get('h1').should('be.visible');
    cy.get('h1').click();
    cy.get('h1').should('have.text', 'Cypress API');
    cy.get('.container > p').should('be.visible');
    cy.get('.container > p').should('have.text', 'Examples of uses of the Cypress API, for a full reference, go to docs.cypress.io\n      ');
    cy.get('#Commands\\.add > a').should('be.visible');
    cy.get('#Commands\\.add > a').should('have.attr', 'href', 'https://on.cypress.io/custom-commands');
    cy.get('#Commands\\.add > a').should('have.text', 'Cypress.Commands.add()');
  });

  it('UtilitiesTest', function() {
    cy.visit('https://example.cypress.io');
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').click();
    cy.get('h1').should('be.visible');
    cy.get('h1').should('have.text', 'Utilities');
    cy.get('.container > p').should('be.visible');
    cy.get('.container > p').should('have.text', 'Examples of the use of methods from other commonly used libraries in Cypress, for a full reference of commands, go to docs.cypress.io\n      ');
    cy.get('#_ > a').should('be.visible');
    cy.get('#_ > a').should('have.attr', 'href', 'https://on.cypress.io/_');
    cy.get('#_ > a').should('have.text', 'Cypress._');
  });

  it('Commands', function() {
    cy.visit('https://example.cypress.io');
    cy.get('.dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(15) > a').click();
    cy.get('h1').should('be.visible');
    cy.get('h1').should('have.text', 'Storage');
    cy.get('.container > p').should('be.visible');
    cy.get('.container > p').should('have.text', 'Examples of managing localStorage and sessionStorage in Cypress, for a full reference of commands, go to docs.cypress.io\n      ');
    
    cy.get('.dropdown-toggle').click();
    cy.get(':nth-child(16) > a').click();
    cy.get('h1').should('be.visible');
    cy.get('h1').should('have.text', 'Cookies');
    cy.get(':nth-child(1) > .row > .col-xs-5 > .well > .set-a-cookie').should('be.enabled');
    cy.get(':nth-child(1) > .row > .col-xs-5 > .well > .set-a-cookie').should('be.visible');
    cy.get(':nth-child(1) > .row > .col-xs-5 > .well > .set-a-cookie').should('have.class', 'btn');
    cy.get(':nth-child(1) > .row > .col-xs-5 > .well > .set-a-cookie').should('have.text', 'Set Cookie');
    cy.get(':nth-child(2) > .row > .col-xs-5 > .well > .set-a-cookie').should('be.enabled');
    cy.get(':nth-child(2) > .row > .col-xs-5 > .well > .set-a-cookie').should('be.visible');
    cy.get(':nth-child(2) > .row > .col-xs-5 > .well > .set-a-cookie').should('have.class', 'btn');
    cy.get(':nth-child(2) > .row > .col-xs-5 > .well > .set-a-cookie').should('have.class', 'set-a-cookie');
    cy.get(':nth-child(2) > .row > .col-xs-5 > .well > .set-a-cookie').should('have.text', 'Set Cookie');
  });

  it('github', function() {
    cy.visit('https://example.cypress.io');
    cy.get('.pull-right > li > a').click();
  });
})