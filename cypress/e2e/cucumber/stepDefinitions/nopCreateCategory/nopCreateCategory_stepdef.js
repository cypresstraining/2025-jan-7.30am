import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import nopCreateCategoryPage from '../../Pages/nopCreateCategoryPage'

//created an obj for the nopCreateCategoryPage
const nopCreateCategoryPage1 =new nopCreateCategoryPage()
//Given step name should be copied into the step def 

Given('Admin user is on Categories page',function(){
    nopCreateCategoryPage1.browseCategoryURL()
    nopCreateCategoryPage1.adminLogin(this.data.adminEmail,this.data.adminPassword)

  
})
When('click on New button',function(){
    nopCreateCategoryPage1.clickOnAddNewCategory()
    
})
When('Fillup the basic fields in the new category screen',function(){
    nopCreateCategoryPage1.fillUpCategoryDetails(this.data.category)
    
})
When('Click on Save button to add the category',function(){
    nopCreateCategoryPage1.clickOnSaveCategory()
    
})
Then('Verify the new category is created and displayed on category list',function(){
    nopCreateCategoryPage1.verifyNewlyCreatedCategory(this.data.category)
    
})
