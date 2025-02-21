describe("MY local web application test suite",()=>{
    beforeEach(()=>{
        cy.visit("http://192.168.29.238:8081/Practise%20webpages/ifram.html")
    })
    xit("My webtable test- with plugin",()=>{
      
      cy.frameLoaded()
     //cy.iframe('tbody tr:nth-child(2) td:nth-child(2)').should("have.text",2)
       cy.iframe().find('tr').eq(0).find('th')
       //.contains('SAT')
       .eq(0).should("have.text","MON")

       cy.iframe().find('tr').eq(1).find('td').eq(0).should('have.text',1)
    })

    it.only("without plugin",()=>{
        cy.get('iframe') //locate the iframe tag with in the application
         .then(($iframe)=>{ //take iframe as a subject and do actions on the iframe subject 
            let iframeBody=$iframe.contents()
            //Get the children of each element in the set of matched elements,
            //  including text and comment nodes.
            .find('table')//find the table dom element with in the iframe 
            console.log(iframeBody)
            //.find('td')
            cy.wrap(iframeBody).should('exist') // is this webtable exists or not 
            cy.wrap(iframeBody).find('tr').should('have.length',5) // if exists do we have 5 rows in a table ? 
            cy.wrap(iframeBody).find('tr').find('th').should('have.length',7)
           cy.wrap(iframeBody).find('tr').find('td').eq(0).should('exist')
           cy.wrap(iframeBody).find('tr').find('td').eq(0).should('have.text',1)

        })
  
    })
})