Feature: Add products

  Scenario: Add products to my car
    When I lanch open zapatoca website
    Then I should assert Bienvenido a Zapatoca
    When I type my email
    When I type my password
    When I click Ingresar
    Then I should assert Hola message
    When I add five products
    When I click finalizar compra
    Then I should assert my order summary

