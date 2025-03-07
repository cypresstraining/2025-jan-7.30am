import * as allure from "allure-cypress";
import { Severity } from "allure-js-commons";

describe('Database Query Tests', () => {
    it('execute a SQL query', () => {
      allure.owner("Ram Prasad");
      allure.tag("DB integration");
      allure.tag("Regression test");
      allure.severity(Severity.CRITICAL);
      
      //const query = 'SELECT * FROM your_table WHERE your_condition';
      cy.sqlServer('select Name from [dbo].[Category]').then((result) => {
        expect(result).to.not.be.empty; // Adjust assertions as needed
        // Perform more assertions on result
        expect(result).to.be.lengthOf(34)
        console.log(result[0][1])
        console.log(result[0][0])
        console.log(result[0][2])
        console.log(result[1][0])
        console.log(result[1][1])
        cy.writeFile('cypress/fixtures/queryresult1.json',result)

      });

      cy.sqlServer("select Name from [dbo].[Category] where Name='Mango'").then((result) => {
        expect(result).to.not.be.empty; // Adjust assertions as needed
        // Perform more assertions on result
        console.log(result)
        expect(result).to.be.lengthOf(5)
        console.log(result[0])
        console.log(result[1])
        //expect(result[0]).to.eq(33)
        expect(result).to.eq('Mango')
        cy.writeFile('cypress/fixtures/queryresult2.json',result)


      });

    });
it('write a query to the customer table', function(){

  allure.owner("Ram Prasad");
  allure.tag("DB integration");
  allure.tag("Regression test");
  allure.severity(Severity.HIGH);

//how to send the query
cy.sqlServer('select * from [dbo].[Customer]').then(function(result){
console.log(result)
//expect(result).to.not.be.empty; // Adjust assertions as needed
        // Perform more assertions on result
        expect(result).to.be.lengthOf(788)
        console.log(result[0][1])
       
        cy.writeFile('cypress/fixtures/customerresults.json',result)

        

})

})


  });
  