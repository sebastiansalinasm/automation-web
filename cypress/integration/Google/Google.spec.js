import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

const url = "";

Given('ingreso a pagina de Google', () => {
    cy.visit(url);
})

When('busco "manolo cabeza de huevo" en la barra de búsqueda', () => {
    cy.get('input[name="addNewItem"]').as('addNewItemInput');
    cy.get('@addNewItemInput').type('My item');
    cy.get('button[name="submitItem"]').click();
})

Then('se despliegan los resultados', () => {
    cy.log('paso xd')
})
