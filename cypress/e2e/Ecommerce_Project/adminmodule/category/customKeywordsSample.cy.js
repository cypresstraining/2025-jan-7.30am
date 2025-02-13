///<reference types="cypress" />

describe("Sample Test suite for custom keyword commandsall",()=>{

beforeEach(()=>{
    cy.visit('http://ramanasoft123-001-site1.anytempurl.com/admin',{
        auth: {
            username: '11211719',
            password: '60-dayfreetrial',
        }
    })
    cy.fixture('example.json').as('data') //store the example.json data into data

})

it("first test to check all custom commands ",function(){
    cy.login(this.data.email,this.data.password)

    cy.adminLogin("admin@yourstore.com","admminadmin")
    cy.createCategory('MYCypress','MyparentCategory')
   cy.createProduct('mobile',2000,'My First')
   cy.createProduct(this.data.name,this.data.price,this.data.category)

   cy.createManfacturer('apple')
    cy.createProductTag('brandNew')

})

})