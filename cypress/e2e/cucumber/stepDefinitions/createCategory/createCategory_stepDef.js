import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
Given('admin should be on category list page',function(){
    cy.log('I am in Given condition')
    cy.visit('http://ramanasoft123-001-site1.anytempurl.com/Admin/Category/List',{
        auth: {
            username: '11211719',
            password: '60-dayfreetrial',
                   }
    })
})
When('Admin click on a New button',function(){
    cy.log('I am in When  condition')

})
When('enter the category name',function(){
    cy.log('I am in Second when condition')


})
When('Enter parent category as None to create this category as parent category',function(){

    cy.log('I am in When condition')

})
Then('category creation should be successful',function(){
    cy.log('I am in Then condition')

})
Then('created category should exist in the category list page',function(){
    cy.log('I am in Then condition')

})