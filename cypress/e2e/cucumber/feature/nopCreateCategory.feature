Feature: Creare a New category

    Scenario: Create a new category through catalog
      Given Admin user is on Categories page
      When click on New button
      When Fillup the basic fields in the new category screen
      When Click on Save button to add the category
      Then Verify the new category is created and displayed on category list

