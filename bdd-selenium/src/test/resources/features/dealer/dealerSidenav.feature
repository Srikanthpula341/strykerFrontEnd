#Author: Aiswarya

Feature: Navbar component On click navigate to details tab
    Scenario: user is on dashboard navigate from sidebar to details tab
        Given User is on dashboard
        When click on ticketid
        Then call Dashboard route for details tab



