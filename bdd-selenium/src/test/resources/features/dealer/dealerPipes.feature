#Author: your.email@your.domain.com


Feature: Check Filter in sidebar for alerts


  Scenario: Filter pipes
    Given user is on dashboard
    When click on filter button on alert sidebar
    Then when filter tab appears, search for "Orders"

