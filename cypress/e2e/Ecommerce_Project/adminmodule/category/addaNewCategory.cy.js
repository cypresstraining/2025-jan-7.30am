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
    
})    