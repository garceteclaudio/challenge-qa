Feature:  Registration

    Scenario: Successful user registration
        Given I open zapatoca registration website
        When I complete the form
        Then I should assert Hola message

# # # ./node_modules/.bin/cucumber-js


