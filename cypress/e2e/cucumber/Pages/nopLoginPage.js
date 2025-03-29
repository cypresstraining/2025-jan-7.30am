class nopLoginPage{

    browseURL(){
        cy.visit('http://ramanasoft123-001-site1.anytempurl.com/login?returnUrl=%2F',{
            auth: {
                username: '11211719',
                password: '60-dayfreetrial',
                       }
        })
        
    }
    clickOnLoginLink(){

        cy.get('.ico-login').click()
    }
    enterEmail(email){
        cy.get('#Email').clear().type(email)

    }  
    enterPassword(password){
        cy.get('#Password').clear().type(password)
    }  
    selectRememberMe(){
        cy.get('label[for="RememberMe"]').should('have.text','Remember me?')
        cy.get('#RememberMe').check()
    }
    clickOnLogin(){

        cy.get('button[class="button-1 login-button"]').click()
    }
    clickOnLogout(){
        cy.get('.ico-logout').click()
    }

    verifyResults(){

        cy.get('.ico-register').should('be.visible')
        cy.get('.ico-login').should('be.visible')
    }
}

export default nopLoginPage