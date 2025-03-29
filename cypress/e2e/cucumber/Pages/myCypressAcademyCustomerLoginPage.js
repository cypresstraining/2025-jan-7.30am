class mycypressacademyCustomerLogin{

browseURL(){
    cy.visit('http://ramanasoft123-001-site1.anytempurl.com/Admin/Category/List',{
        auth: {
            username: '11211719',
            password: '60-dayfreetrial',
                   }
    })
    
}
clickLogin(){
    cy.get('.ico-login').click() 
    //connfirming that we are in login page 
    cy.url().should('eq','http://ramanasoft123-001-site1.anytempurl.com/login?returnUrl=%2FAdmin%2FCategory%2FList')
    
}
performLogin(email,password){
cy.get('#Email').clear().type(email)
cy.get('#Password').clear().type(password) 
cy.get('#RememberMe').check()
cy.get('button[class="button-1 login-button"]').click()

}
clickMyaccount(){
    cy.contains('My account').click()
cy.url().should('eq','http://ramanasoft123-001-site1.anytempurl.com/customer/info')

}
cllickLogout(){
    cy.contains('Logout').click()

}
VerifyLogout(){
cy.url().should('eq','http://ramanasoft123-001-site1.anytempurl.com/')
cy.get('h2').should('contain','Welcome to our store')    

}


}

export default mycypressacademyCustomerLogin