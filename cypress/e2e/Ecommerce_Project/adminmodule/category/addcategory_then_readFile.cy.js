
///<reference types="cypress" />

describe('Ecommerce new customer registration',()=>{
    beforeEach(()=>{//before every it block it will execute
        cy.visit('http://ramanasoft123-001-site1.anytempurl.com/admin',{
            auth: {
                username: '11211719',
                password: '60-dayfreetrial',
            }
        })
       
        //before every test I want to read the data from the external file fixtures >> example.json
        cy.readFile('cypress/fixtures/users/example.json').then(function(testData){
            this.testData=testData
        })
        //.as('testData') //fixture() to read the data
        //Load a fixed set of data located in a file.
        //aliasing as  => provide a name to retrive in the future  
       
    })
    //arrow function will not carry the this keyword - ()=> will not worj with fixtures
    it('Create a new category with Login custom keyword ',function(){
        //replace arrow function with function() to work with this keyword 
        //call the object property with this.object.property
        //this.testData.name/emai/passowrd 
        cy.log("print name in the example.json file",this.testData.name)
        cy.log("print email in the example.json file",this.testData.email)
        cy.log("print password in the example.json file",this.testData.password)
        cy.log("print category name in the example.json file",this.testData.category)
        cy.log("print price in the example.json file",this.testData.price)
//try to login with custom keywoprd cy.login() and data read through fixtures with the help of as()
        cy.login(this.testData.email,this.testData.password)//complete login process
        cy.categorylistPage() //navigate to categorylist page 
        cy.AddNew()//click on addNew button
        cy.createParentcategory(this.testData.category)//create a category as a parent
        cy.get('.alert.alert-success.alert-dismissable').should('have.text','× The new category has been added successfully.')
       
    })
    
})    