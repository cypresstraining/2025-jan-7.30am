class TestBDDPage{

    visit(){
        cy.visit('http://ramanasoft123-001-site1.anytempurl.com/login?returnUrl=%2F',{
                auth: {
                    username: '11211719',
                    password: '60-dayfreetrial',
                           }
            })
    }
    enterEmail(){
        cy.get('#Email').clear().type('admin@yourstore.com')
    
    }
    enterPassword(){
         cy.get('#Password').clear().type('adminadmin')
    }
    clickLogin(){
        cy.get('.button-1.login-button').click()
    }
    verifyAdministration(){
        cy.get('.administration').should('exist')

    }
    verifyMyAccount(){
        cy.get('.ico-account').should('exist')

    }
}

export const testBDDpage = new TestBDDPage() // object creation for the class 