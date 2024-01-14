
@tag
Feature: Invoice form submission
  I want to submit the form when i click on the create invoice button

  @tag1
  Scenario: Submitting the form
    Given I am on the create invoice page
    When I enter the customer name, ticket id and discount
    And when i click on the create invoice button
    Then the data should reach in invoice form

 
  
