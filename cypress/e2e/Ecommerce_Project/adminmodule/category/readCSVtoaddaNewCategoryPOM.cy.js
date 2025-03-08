///<reference types="cypress"/>
import neatCsv from 'neat-csv';
// importing the neatCsv capabilities into your test  

describe('Ecommerce new customer registration',()=>{
    beforeEach(()=>{//before every it block it will execute
        cy.visit('http://ramanasoft123-001-site1.anytempurl.com/admin',{
            auth: {
                username: '11211719',
                password: '60-dayfreetrial',
            }
        })

        //let table
        cy.fixture('users/testData.csv')//read the data from file 
        .then(neatCsv) // apply the csv capabilities to the file 
        .then(function(csvData){
        this.csvData=csvData

        })
        
       
    })
    it('Create a new category with Login custom keyword ',function(){
        console.log(this.csvData)
        console.log(this.csvData[0].name)
        console.log(this.csvData[1].name)
        console.log(this.csvData[2].name)
        console.log(this.csvData[2].email)
        console.log(this.csvData[0].price)
        cy.log(this.csvData[2].email)
        cy.log(this.csvData[2].password)
        cy.log(this.csvData[2].name)
        cy.log(this.csvData[2].category)
        cy.log(this.csvData[2].price)




       // console.log(this.csvData.name[1])
        //console.log(this.csvData.name[2])
        //console.log(this.csvData.email[0])
        //console.log(this.csvData.email[1])

        cy.login(this.csvData[0].email,this.csvData[0].password)//complete login process
        cy.categorylistPage() //navigate to categorylist page 
        cy.AddNew()//click on addNew button
        cy.createParentcategory('yourcategory')//create a category as a parent
        cy.get('.alert.alert-success.alert-dismissable').should('have.text','× The new category has been added successfully.')
       
    })

    it.only("reading the csv file ",function(){
        console.log(this.csvData)
        console.log(this.csvData[5])
        console.log(this.csvData[4])
        console.log(this.csvData[3])
        console.log(this.csvData[2])
        console.log(this.csvData[1])
        console.log(this.csvData[0])
        cy.log(this.csvData[5].name)
let i=Math.floor(Math.random()*10)
console.log(i)
cy.log(i)
        //Math.floor()
        //math.random() - 0 to 1 wecan find a random value  that you need t0
        //make it as a number with the help of floor()
        //by using these two function you can try to capture the random test data from the csv file 







    })
})    