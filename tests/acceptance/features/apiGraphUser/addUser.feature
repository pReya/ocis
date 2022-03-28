@api
Feature:
  As an administrator
  I should be able to create user using Graph API
  So that I can manage users more easily


  @smokeTest
  Scenario: admin creates a user
    Given user "brand-new-user" has been deleted
    When the administrator sends a user creation request for user "brand-new-user" password "%alt1%" using the graph API
    And the HTTP status code should be "200"
    And user "brand-new-user" should exist
    When user "brand-new-user" uploads file "filesForUpload/textfile.txt" to "/textfile.txt" using the WebDAV API
    Then the HTTP status code should be "201"

  Scenario: admin tries to create an existing user
    And user "brand-new-user" has been created with default attributes and without skeleton files
    When the administrator sends a user creation request for user "brand-new-user" password "%alt1%" using the graph API
    And the HTTP status code should be "500"
    Then the graph API response should return the following error
      | code    | generalException                                   |
      | message | LDAP Result Code 68 "Entry Already Exists":{space} |
