Feature: nopcommerce Login Functionality
  Scenario: nop commerce Login and Logout with Valid Credentials
    Given User is on the nopcommerce login page
    When nopcommerce login with valid credentials
    And User click on the nopcommerce logout button
    Then User should be routed back to nopcommerce page
