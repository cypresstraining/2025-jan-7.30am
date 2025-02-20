describe("MY local web application test suite",()=>{
    beforeEach(()=>{
        cy.visit("http://192.168.29.238:8081/Practise%20webpages/newWebTable.html")
    })
    it("My webtable test",()=>{
        cy.get('tbody tr:nth-child(2) td:nth-child(2)').should("have.text",2)
       cy.get('tr').eq(0).find('th')
       //.contains('SAT')
       .eq(0)
    })
})