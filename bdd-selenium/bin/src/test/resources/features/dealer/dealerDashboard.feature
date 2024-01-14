#Author: Srikanth Pula
#date: 24/1/2023
#Description: Test sample
Feature: Login feature
  As a user
  I want to be able to load the dashboard after login
  so that I can access data in dahboard

  Scenario: After Successful login
    Given I am on the dashboard page
    When 	when i change the timeframe 
    When it should load the data  
    Then that loaded data should not be equal to initial one
