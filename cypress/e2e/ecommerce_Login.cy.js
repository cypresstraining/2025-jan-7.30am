///<reference types="cypress" />
describe('Ecommerce new customer registration',()=>{
beforeEach(()=>{//before every it block it will execute
    cy.visit('http://ramanasoft123-001-site1.anytempurl.com/',{
        auth: {
            username: '11211719',
            password: '60-dayfreetrial',
        }
    })
   
})
it('To Test the  Login  with studio commands',()=>{
    cy.log("in this test we can record cypress studio commands ")

    cy.get('.ico-login').click();
    cy.get('h1').should('be.visible');
    cy.get('h1').should('have.text', 'Welcome, Please Sign In!');
    cy.get('.new-wrapper > .title > strong').should('be.visible');
    cy.get('.new-wrapper > .title > strong').should('have.text', 'New Customer');
    cy.get('.text').should('be.visible');
    cy.get('.text').should('have.class', 'text');
    cy.get('.text').should('have.text', 'By creating an account on our website, you will be able to shop faster, be up to date on an order\'s status, and keep track of the orders you have previously made.');
    cy.get('.new-wrapper > .buttons > .button-1').should('be.enabled');
    cy.get('.new-wrapper > .buttons > .button-1').should('be.visible');
    cy.get('.new-wrapper > .buttons > .button-1').should('have.attr', 'onclick', 'location.href="http://ramanasoft123-001-site1.anytempurl.com/register?returnUrl=%2F"');
    cy.get('.new-wrapper > .buttons > .button-1').should('have.class', 'register-button');
    cy.get('.new-wrapper > .buttons > .button-1').should('have.class', 'button-1');
    cy.get('.new-wrapper > .buttons > .button-1').should('have.text', 'Register');
    cy.get('form > .title > strong').should('be.visible');
    cy.get('form > .title > strong').should('have.text', 'Returning Customer');
    cy.get(':nth-child(1) > label').should('be.visible');
    cy.get(':nth-child(1) > label').should('have.attr', 'for', 'Email');
    cy.get(':nth-child(1) > label').should('have.text', 'Email:');
    cy.get('#Email').should('not.be.checked');
    cy.get('#Email').should('be.enabled');
    cy.get('#Email').should('be.visible');
    cy.get('#Email').should('have.attr', 'data-val', 'true');
    cy.get('#Email').should('have.attr', 'data-val-required', 'Please enter your email');
    cy.get('#Email').should('have.id', 'Email');
    cy.get('#Email').should('have.class', 'email');
    cy.get('#Email').clear('a');
    cy.get('#Email').type('admin@yourstore.com');
    cy.get('#Password').click();
    cy.get('#Password').should('not.be.checked');
    cy.get('#Password').should('be.enabled');
    cy.get('#Password').should('be.visible');
    cy.get('#Password').should('have.attr', 'type', 'password');
    cy.get('#Password').should('have.attr', 'name', 'Password');
    cy.get('#Password').should('have.id', 'Password');
    cy.get('#Password').should('have.class', 'password');
    cy.get('#Password').clear('a');
    cy.get('#Password').type('adminadmin');
    cy.get('#RememberMe').check();
    cy.get('form > .buttons > .button-1').click();
    cy.get('.ico-account').should('be.visible');
    cy.get('.ico-account').should('have.text', 'My account');
    cy.get('.ico-logout').should('be.visible');
    cy.get('.ico-logout').should('have.text', 'Log out');
    cy.get('.ico-logout').click();
    cy.get('.ico-login').should('be.visible');
    cy.get('.ico-login').should('have.text', 'Log in');
    cy.get('.ico-register').should('be.visible');
    cy.get('.ico-register').should('have.text', 'Register');
})
  it.only('by using playground',()=>{
    cy.get('.ico-login').click()
    cy.get('#Email').clear().type('admin@yourstore.com')
    cy.get('#Password').clear().type('adminadmin')
    cy.get('form > .buttons > .button-1').click()

  })  
})