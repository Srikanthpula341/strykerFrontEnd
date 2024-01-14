#Author: Srikanth Pula
#date: 24/1/2023
#Description: Test sample
Feature: Login feature
  As a user
  I want to be able to login to the application
  so that I can access my account

  Scenario: Successful login
    Given I am on the login page
    When 	I enter my username and password
    When I click the login button
    Then I should be taken to the home page
