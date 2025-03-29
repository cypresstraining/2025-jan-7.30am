Feature: Conduit Login Functionality
  Scenario: Login and Logout with Valid Credentials
    Given User is on the login pages test
    When User login with valid credentials
    When User click on the logout button
    Then User should be routed back to login page
