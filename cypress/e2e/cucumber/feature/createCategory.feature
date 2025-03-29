Feature: create Category
    Scenario: create Category as a parent Category
     Given admin should be on category list page 
     When Admin click on a New button 
     When enter the category name 
     When Enter parent category as None to create this category as parent category
     Then category creation should be successful 
     Then created category should exist in the category list page 
     