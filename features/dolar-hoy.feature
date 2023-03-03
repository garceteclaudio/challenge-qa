Feature: Dolar hoy

  Scenario: Obtener cotizacion del dolar blue
    Given Estoy en la pagina de dolar hoy
    When Obtengo la cotizacion
    Then Guardo el dato en un archivo txt

#./node_modules/.bin/cucumber-js