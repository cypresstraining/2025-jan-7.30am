class nopCreateCategoryPage{
browseCategoryURL(){
    cy.visit('http://ramanasoft123-001-site1.anytempurl.com/login?returnUrl=%2F',{
        auth: {
            username: '11211719',
            password: '60-dayfreetrial',
                   }
    })

}
adminLogin(email,password){
    cy.get('.ico-login').click()
    cy.get('#Email').clear().type(email)
    cy.get('#Password').clear().type(password)
    cy.get('button[class="button-1 login-button"]').click()


}
clickOnAddNewCategory(){

    cy.get('a[class="btn btn-primary"]').click()
    //cy.contains('Add new')
}
fillUpCategoryDetails(category){
cy.get('#Name').type(category)
cy.get('#ParentCategoryId').select(0)
//add your code here   to add more options
}

clickOnSaveCategory(){
    cy.get('[name="save"]').click()
}
verifyNewlyCreatedCategory(category){

    cy.get('[class="alert alert-success alert-dismissable"]').should('have.text','× The new category has been added successfully.')
    cy.get('#SearchCategoryName').type(category)
    cy.get('#search-categories').click()
    cy.get('td:nth-child(2)').should('contain',category)
}

}

export default nopCreateCategoryPage
