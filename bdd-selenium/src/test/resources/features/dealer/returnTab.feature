#Author: your.email@your.domain.com


Feature: Button click in return details tab
  I want to navigate to missing details tab by clicking on mark as missing button


  Scenario: navigating to missing tab
    Given I am on return details tab
    When I click on mark as missing button
    Then I should navigate to missing details tab


