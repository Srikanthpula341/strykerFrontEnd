#Author: your.email@your.domain.com

@tag
Feature: Button click in top navbar
  I want to navigate to invoice page when i click on crate invoice button and select invoice


  Scenario: Successfull navigation
    Given I am on the dashboard tab
    When I click on the create button
    And I select invoice
    Then I should navigate to invoice page
