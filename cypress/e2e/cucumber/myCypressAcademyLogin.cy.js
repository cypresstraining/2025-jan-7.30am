describe('',()=>{
  it('',()=>{
  cy.visit('http://mycypressacademy-001-site1.atempurl.com/', {
    auth: {
      username: '11200631',
      password: '60-dayfreetrial',
    },
  })
  //verifying the title of the page by using cy.title()
cy.title().should('eq','Your store. Home page title')
cy.contains('Log in') // one possible way 
cy.get('.ico-login').click()//another possible way to capture login 
cy.url().should('eq','http://mycypressacademy-001-site1.atempurl.com/login?returnUrl=%2F')//checking the resulting url 
cy.title().should('eq','Your store. Login')
cy.get('#Email').clear().type(this.data.email)//email loaded from json file
cy.get('#Password').clear().type(this.data.password)//password loaded from json file 
cy.get('#RememberMe').check()
cy.get('button[class="button-1 login-button"]').click()
cy.get('.ico-account')//implicit assertion - for my account 
cy.get('.ico-logout')//logout should present after successful login 
cy.title().should('eq','Your store. Home page title')
cy.url().should('eq','http://mycypressacademy-001-site1.atempurl.com/')

 

cy.visit('http://mycypressacademy-001-site1.atempurl.com/', {
auth: {
  username: '11200631',
  password: '60-dayfreetrial',
},
})
//verifying the title of the page by using cy.title()
cy.title().should('eq','Your store. Home page title')
cy.contains('Log in') // one possible way 
cy.get('.ico-login').click()//another possible way to capture login 
cy.url().should('eq','http://mycypressacademy-001-site1.atempurl.com/login?returnUrl=%2F')//checking the resulting url 
cy.title().should('eq','Your store. Login')
cy.get('#Email').clear().type(this.data.email1)//email loaded from json file
cy.get('#Password').clear().type(this.data.password1)//password loaded from json file 
cy.get('#RememberMe').check()
cy.get('button[class="button-1 login-button"]').click()
//cy.title().should('eq','Your store. Home page title')
//cy.url().should('eq','http://mycypressacademy-001-site1.atempurl.com/')

//copy the code remove the  input data from username and password
//add an extra assertion to check the error messages for both username and password
///remove logout , my account  commands or add an assertion doesnot exist ,not.be.visible 
//cy.readFile('user.json')//locate the file from root directry 

}) 
xit('invalid email or password to test error messages',()=>{

//same code but input invalid email and password to throw an error message 
// add validation steps as above 

})
})