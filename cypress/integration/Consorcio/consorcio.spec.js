/// <reference types="Cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

const urlbank = 'https://www.bancoconsorcio.cl/'

Given('I open Chrome nav', () => {
    cy.visit(urlbank)
    cy.url('include', 'consorcio')

})
Then('I enter to Banco Consorcio page', () => {
    let logo = cy.get('.logo')
    if(logo) {
        cy.log('Página cargada exitosamente')
    } else {
        cy.log('ERROR')
    }
})

Given('I type "crédito"', () => {
    cy.get('#mod-finder-searchword')
    .type('Créditos', {delay: 100})
})

When('I press button search', () => {
    cy.log('presión')
})
