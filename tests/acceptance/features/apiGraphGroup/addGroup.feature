@api
Feature: add groups
  As an administrator
  I want to be able to create group using the Graph API
  So that I can more easily manage access to resources by groups rather than individual users

  Scenario:
    When the administrator sends a group creation request for the following groups using the graph API
      | group_display_name |
      | simplegroup        |
      | España§àôœ€      |
      | नेपाली               |
    And the HTTP status code of responses on all endpoints should be "200"
    And these groups should exist:
      | groupname     |
      | simplegroup   |
      | España§àôœ€ |
      | नेपाली          |
