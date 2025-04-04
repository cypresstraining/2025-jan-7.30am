// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//import 'cypress-iframe';
//require('cypress-iframe');

Cypress.Commands.add('login', (email, password) => { 
    cy.get('.ico-login').click();
    cy.get('h1').should('have.text', 'Welcome, Please Sign In!');
    cy.get('#Email').type(email);
    cy.get('#Password').type(password);
    cy.get('#RememberMe').check();
    cy.get('form > .buttons > .button-1').click();
    cy.get('.navbar-nav > :nth-child(3) > .nav-link').should('be.visible')
    .should("contain","Logout")
    
})
Cypress.Commands.add('categorylistPage',()=>{
    cy.get('body > div:nth-child(3) > aside:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1) > p:nth-child(2)').click({force:true})
    cy.get("body > div:nth-child(3) > aside:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > p:nth-child(2)").click({force:true})
        
})
Cypress.Commands.add('AddNew',()=>{
    cy.get("a[class='btn btn-primary']").click()

})
Cypress.Commands.add('createParentcategory',(name)=>{

    cy.get('#Name').clear().type(name)
        cy.get("#ParentCategoryId").select("[None]")
        cy.get("button[name='save']").click()
})
Cypress.Commands.addAll({
    adminLogin(email, pw) {
        cy.visit('http://ramanasoft123-001-site1.anytempurl.com/admin',{
            auth: {
                username: '11211719',
                password: '60-dayfreetrial',
            }
        })
        cy.log("provided email is :",email)
        cy.log("provided password is :",pw)
        cy.log("Iam in the customadminLogin keyword")

    },
    createCategory(name,parentCategory){
        
        cy.log("Iam in the createCategory keyword",name,parentCategory)

    },
    createProduct(name,price,category){
        cy.log("Iam in the create Product keyword",name,price,category)
        cy.visit('http://ramanasoft123-001-site1.anytempurl.com/Admin/Product/List',{
            auth: {
                username: '11211719',
                password: '60-dayfreetrial',
            }

        })
        cy.get("a[class='btn btn-primary']").click()
//a[class='btn btn-primary']
        cy.get('#Name').type(name)
        cy.get('#Price').type(price)
        cy.get(".select2-search.select2-search--inline").eq(0).type(category)
        cy.get("button[name='save']").click()
        cy.get('.alert.alert-success.alert-dismissable').should('have.text','× The new product has been added successfully.')
       .should('have.css','color','rgb(255, 255, 255)')
    
    },
    createManfacturer(name){
        //write your code
        cy.log("Iam in the create Manfacturer keyword",name)

    },
    createProductTag(tagname){
        //write your code 
        cy.log("Iam in the create ProductTag keyword",tagname)

    }

  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })