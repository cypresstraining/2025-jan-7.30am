/*

describe('Ecommerce new customer registration',()=>{
    beforeEach(()=>{//before every it block it will execute
        cy.visit('http://ramanasoft123-001-site1.anytempurl.com/admin',{
            auth: {
                username: '11211719',
                password: '60-dayfreetrial',
            }
        })
       
    })
    it('Create a new category with Login custom keyword ',()=>{
        cy.login('admin@yourstore.com','adminadmin')//complete login process
        cy.categorylistPage() //navigate to categorylist page 
        cy.AddNew()//click on addNew button
        cy.createParentcategory('yourcategory')//create a category as a parent
        cy.get('.alert.alert-success.alert-dismissable').should('have.text','× The new category has been added successfully.')
       
    })
    
})    describe('Ecommerce new customer registration',()=>{
    beforeEach(()=>{//before every it block it will execute
        cy.visit('http://ramanasoft123-001-site1.anytempurl.com/admin',{
            auth: {
                username: '11211719',
                password: '60-dayfreetrial',
            }
        })
       
    })
    it('Create a new category with Login custom keyword ',()=>{
        cy.login('admin@yourstore.com','adminadmin')//complete login process
        cy.categorylistPage() //navigate to categorylist page 
        cy.AddNew()//click on addNew button
        cy.createParentcategory('yourcategory')//create a category as a parent
        cy.get('.alert.alert-success.alert-dismissable').should('have.text','× The new category has been added successfully.')
       
    })
    
})    
*/

class createCategory{

    visitAdminPage(){
        cy.visit('http://ramanasoft123-001-site1.anytempurl.com/admin',{
            auth: {
                username: '11211719',
                password: '60-dayfreetrial',
            }
        })
    }

    login(username,password){
        cy.get('#Email').type(username)
        cy.get('#Password').type(password)
        cy.get('#RememberMe').check();
        cy.get('form > .buttons > .button-1').click();
    
    }
    VerifyLogout(){
       // cy.get('.navbar-nav > :nth-child(3) > .nav-link').should('be.visible')
        //.should("contain","Logout")
cy.contains('Logout').should('be.visible')
cy.contains('Logout').click()
cy.contains('Register').should('be.visible')


    }

    createCategory(categoryName){
        cy.get('body > div:nth-child(3) > aside:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1) > p:nth-child(2)').click({force:true})
    cy.get("body > div:nth-child(3) > aside:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > p:nth-child(2)").click({force:true})
    cy.get("a[class='btn btn-primary']").click()
        cy.get('#Name').type(categoryName)
        cy.get('[name="save"]').click()
        cy.get('.alert.alert-success.alert-dismissable').should('have.text','× The new category has been added successfully.')
    }
  
}

export default createCategory; //this is used to exporting this class to use it from another JS file 