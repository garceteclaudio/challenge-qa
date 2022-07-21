Feature:  Login

  Scenario: Successful login to the web
    When I lanch open zapatoca website
    Then I should assert Bienvenido a Zapatoca
    When I type my email
    When I type my password
    When I click Ingresar
    Then I should assert Hola message    