import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
// how we can import other classes related objects or methods the same way 
// we do import given , when and then 
import { testBDDpage } from "../../Pages/testBDDPage";

Given('customer should be in website login page',function(){
testBDDpage.visit()    
})
When('enter the valid username and password',function(){
   testBDDpage.enterEmail()
   testBDDpage.enterPassword()

})
When('click on Login button',function(){
testBDDpage.clickLogin()

})
Then('Login should be successful',function(){
testBDDpage.verifyAdministration()
})
Then('customer able to My account Link',function(){
testBDDpage.verifyMyAccount()
})

