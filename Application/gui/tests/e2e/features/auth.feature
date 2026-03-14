Feature: Authentication
  As a user
  I want to log in to the application
  So that I can access protected resources

  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    Then I should be redirected to the home page
    And I should see my username in the navigation

  Scenario: Failed login
    Given I am on the login page
    When I enter invalid credentials
    Then I should see an error message

  Scenario: Logout
    Given I am logged in
    When I click the logout button
    Then I should be redirected to the login page
    And I should no longer be authenticated
