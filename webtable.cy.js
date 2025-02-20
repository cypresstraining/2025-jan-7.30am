///<reference types="cypress" />

describe('web table autoamtion',function(){
    beforeEach(function(){
        cy.visit('http://192.168.29.238:8081/Practise%20webpages/newWebTable.html')
    })
    it('finding the data exisitng in the table by using eq', function(){
        cy.get('h2').should('contain','Colgroup')
        cy.get('p').should('have.text','Add the a colgroup with a col element that spans over two columns to define a style for the two columns:')
        cy.get('tbody').find('tr') //finding the tr with in the tbody
        .eq(0) //first table row we need to filter from the results 
        .find('th')// th tag should exist with multiple results 
        .eq(1)//this is to filter the results and select first th 
        .should('have.text','TUE') 
        //checking the tbody tag with in this we need to find tr tr with in this th tag 

    
    })

    it('by using nth child concept we need to identify the table data', function(){
      cy.get('tr:nth-child(1)>th:nth-child(1)').should('include.text','MON')

    })

   // after few days we can run the same test by using for loop and .each method -
   //a perticular for all components with in the table 
   //5 trs  then your script run for 5 times and capture the information from csv or json file as expected result 
   // compare your expected result for first tablerow  first data you verify
   // for all table rows we can iterate through a for loop initially 
   // .each() method to automate the multiple interation in Data driven testing 
   // please go through java script for loop and for each 
   // arrays and methods in arrays 
   // function() 
   // promises in java script 

})
