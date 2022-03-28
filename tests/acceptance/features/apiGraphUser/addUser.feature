@api
Feature:
  As an administrator
  I should be able to create user using Graph API
  So that I can manage users more easily


  @smokeTest
  Scenario: admin creates a user
    Given user "brand-new-user" has been deleted
    When the administrator sends a user creation request for user "brand-new-user" password "%alt1%" using the graph API
    And the HTTP status code should be "500"
    And user "brand-new-user" should exist
    And user "brand-new-user" should be able to upload file "filesForUpload/textfile.txt" to "/textfile.txt"

  Scenario: admin tries to create an existing user
    Given user "brand-new-user" has been created with default attributes and without skeleton files
    When the administrator sends a user creation request for user "brand-new-user" password "%alt1%" using the graph API
    And the HTTP status code should be "400"
    And the API should not return any data
