
///<reference types="cypress" />
///<reference types="cypress-iframe" />
describe('Iframe understanding ',()=> {
beforeEach(()=>{
    cy.visit('http://192.168.29.238:8080/Practise%20webpages/ifram.html')

})
    it('automate the iframe with iframe plugin',()=>{
        cy.frameLoaded()// to load the iframe with in your test we are using frameLoaded method from cypress-iframe plugin
        cy.iframe().find('h2').should('contain','Colgroup')        
        cy.iframe().find('p').should('contain','Add the a colgroup with a col element that spans over two columns to define a style for the two columns:')
        cy.iframe().find('table').find('tbody').find('tr').first().find('th').eq(1).should('include.text','TUE')
    })

   it('without plugin ',()=>{
    cy.get('iframe').then(($iframe) => {
            // Get the contentDocument of the iframe
             const iframeBody = $iframe.contents().find('table')
             cy.log("iframeBody is ",iframeBody)
             //.find('body');
            //const is a varaible declaration which does not support the change in the value 
            //let and var 
            //const myiframeBody
            //$ is used to retrieve the value of variable 
            //$iframe means iframe tag 
            //with in this  iframe tag we do have webtable code
            // with in this $iframe.contents() // grabbing the entire content of the iframe into your constant varaible 


            // Make sure the iframe is loaded
          console.log(iframeBody)
            cy.wrap(iframeBody) //wrapping the jquery contents output supplied to your cypress wrap command
            .should('exist');
      
            // Now, interact with the elements inside the iframe
            // Example: Click a button inside the iframe
            //cy.wrap(iframeBody).find('button').click();
           // cy.wrap(iframeBody).find('h2').should('contain','Colgroup')        
           // cy.wrap(iframeBody).find('p').should('contain','Add the a colgroup with a col element that spans over two columns to define a style for the two columns:')
            cy.wrap(iframeBody)//table only we are getting
            //.find('table')
            .find('tbody').find('tr').first().find('th').eq(1).should('include.text','TUE')
    })
    })
})