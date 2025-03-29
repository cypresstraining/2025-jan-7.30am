Feature: websiteLogin
  Scenario: login with valid credentails 

       Given customer should be in website login page
       When enter the valid username and password 
       When click on Login button 
       Then Login should be successful 
       Then customer able to My account Link 