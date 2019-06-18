Feature: Revisión de Página Principal de Banco Consorcio

    Quiero que al visualizar la página principal de Banco Consorcio se realicen movimientos en la página para la revisión del response

    Scenario: Ingresar a Página Principal de Consorcio
        Given I open Chrome nav
        Then I enter to Banco Consorcio page

    Scenario: Utilizar el Buscador
        Given I type "crédito"
        When I press button search

