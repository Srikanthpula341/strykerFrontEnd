#Author: your.email@your.domain.com

@tag
Feature: Button click
  I want to navigate to invoice page when i click on invoice it button

  @tag1
  Scenario:  button click in missing details page
    Given I am in return details page
     When I click on missing button
     Then I should navigate to missing details page
     When I click on invoice it button
     Then I should navigate to invoice page
     

   
   
