Feature: Dolar hoy

  Scenario: Obtener cotizacion del dolar blue
    Given Estoy en la pagina de dolar hoy
    When Obtengo la cotizacion
    Then Guardo el dato en un archivo txt

  Scenario Outline: Scenario Outline name: Assert error message
    Given Test "<user>" and "<password>"
    Examples:
        | user | password |
        | clau | dinho |

# ./node_modules/.bin/cucumber-js