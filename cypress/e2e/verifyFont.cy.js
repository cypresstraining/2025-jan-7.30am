describe("Font type, size,color",()=>{
    it("font for customer website ",()=>{
        cy.visit('http://ramanasoft123-001-site1.anytempurl.com/',{
            auth: {
                username: '11211719',
                password: '60-dayfreetrial',
            }
        })

        cy.get(".ico-register").should('be.visible')
        .should('have.css','font-size','12px')
        .should('have.css','color','rgb(119, 119, 119)')
        .should('have.css','font-family','Arial, Helvetica, sans-serif')
       
    })

    it("admin website font size , type and color ",()=>{
        cy.visit('http://ramanasoft123-001-site1.anytempurl.com/admin',{
            auth: {
                username: '11211719',
                password: '60-dayfreetrial',
            }
        })
  cy.login("admin@yourstore.com","adminadmin")
       cy.contains("Logout")
        .should('have.css','font-size','16px')
        .should('have.css','color','rgba(255, 255, 255, 0.75)')
        .should('have.css','font-family','"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"')
       
    })
})