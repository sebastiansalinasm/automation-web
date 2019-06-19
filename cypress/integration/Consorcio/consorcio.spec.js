/// <reference types="Cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

const urlbank = 'https://www.bancoconsorcio.cl/'

// --- Scenario 1

Given('I open Chrome nav', () => {
    cy.visit(urlbank)
    cy.url('include', 'consorcio')

})
Then('I enter to Banco Consorcio page', () => {
    let logo = cy.get('.logo')
    if(logo) {
        cy.log('Página cargada exitosamente')
        cy.screenshot('pagina-1')
    } else {
        cy.log('ERROR')
    }
})

// --- Scenario 2 

Given('I type "crédito"', () => {
    cy.get('#mod-finder-searchword')
    .type('Créditos', {delay: 100})
    .should('have.value', 'Créditos')
})

When('I press button search', () => {
    cy.get('.input-append > .btn')
    .click()
    cy.url('include', '/busqueda')
    cy.screenshot('pagina-2')
})

// --- Scenario 3

Given('I type "Consumo"', () => {
    cy.get('#q')
    .clear()
    .type('Consumo', {delay: 100})
    .should('have.value', 'Consumo')
})

When('I press the button "buscar"', () => {
    cy.get('.word > .btn')
    .click()
    cy.url('include', '/busqueda')
})

Then('Show the new results', () => {
    cy.screenshot('pagina-3')
})