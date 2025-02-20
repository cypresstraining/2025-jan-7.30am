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

        cy.get('iframe').then(($iframe)=>{
            let iframeBody=$iframe.contents().find('table')
            console.log(iframeBody)
            //.find('td')
            cy.wrap(iframeBody).should('exist')
            cy.wrap(iframeBody).find('tr').should('have.length',5)
        })
  
    })
})