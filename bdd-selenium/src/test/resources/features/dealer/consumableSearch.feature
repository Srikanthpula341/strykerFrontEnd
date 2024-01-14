#Author: Shijin MS
#date: 2/2/2023
#Description: Test sample
@consumable
Feature: Consumable search feature
  As a user
  I want to be able to load the dashboard after login
  and search the consumables which is required

  Scenario Outline: After Successful login
    Given I am on the dashboard page which has consumables table
    When  when i enter the search text like <searchText>
    Then it should load the data according to the searched text
    Examples:
      | searchText |
      | mircro     |
#      | remb       |

