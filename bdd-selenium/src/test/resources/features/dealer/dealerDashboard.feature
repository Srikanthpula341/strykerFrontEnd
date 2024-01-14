#Author: Srikanth Pula
#date: 24/1/2023
#Description: Test sample
Feature: Dealers Dashboard feature
  As a user
  I want to be able to load the dashboard after login
  so that I can access data in dahboard

  @smoke
  @Second
  Scenario: After Successful login
    Given I am on the dashboard page
    When 	when i change the timeframe
    And it should load the data
    Then that loaded data should not be equal to initial one

  @smoke
  @Third
  Scenario: After Successful entering into page
    Given I am on the dashboard with time frame in last month
    When when i change the timeframe to last year
    Then that loaded data should  be greater then to initial one

     @smoke
  Scenario: Testing For dropdown in chart
    Given I am on the dashboard with chart drop down available
    When when i change the drop down select in chart
    Then that chart data will should change
