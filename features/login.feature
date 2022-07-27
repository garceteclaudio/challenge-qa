Feature:  Login

  Scenario: Successful login to the web
    When I open zapatoca website
    Then I should assert Bienvenido a Zapatoca
    When I type my email "test@gmail.com"
    When I type my password "AAA1234aaaa"
    When I click Ingresar
    Then I should assert Hola message    


  Scenario Outline: Scenario Outline name: Assert error message
    When I open zapatoca website
    Then I should assert Bienvenido a Zapatoca
    When I type my email "test@gmail.com"
    When I type my password "asdasd"
    When I click Ingresar
    Then I assert error message
    Examples:
        | test | 
        | 5    | 
        # | 10   | 
