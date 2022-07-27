Feature: Add products

  Scenario: Add products to my car
    When I open zapatoca website
    Then I should assert Bienvenido a Zapatoca
    When I type my email "test@gmail.com"
    When I type my password "AAA1234aaaa"
    When I click Ingresar
    Then I should assert Hola message
    #
    When I add five products
    When I click finalizar compra
    Then I should assert my order summary

