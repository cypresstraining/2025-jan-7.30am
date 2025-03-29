Feature: CypressAcademy customer Login Functionality
  Scenario: Login and Logout with Valid Credentials
    Given User is on the login page
    When User login with valid credential
    When User click on the My account Link
    When User click on the logout Link
    Then User should be routed back to Home page
