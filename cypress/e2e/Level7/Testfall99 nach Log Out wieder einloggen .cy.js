describe('nach Log Out wieder einloggen', () => {
  it('soll nach Log Out wieder einloggen und vorher geschützte seiten aufrufen   ', () => {


cy.visit('/') 
cy.contains('Log in').click();
    cy.get('#Email').type(Cypress.env('TEST_EMAIL'));
    cy.get('#Password').type(Cypress.env('TEST_PASSWORD'));
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();



cy.get('.ico-logout') 
      .should('be.visible') 
      .click()

 cy.contains('a', 'Orders').click()


cy.contains('Log in').click();
    cy.get('#Email').type(Cypress.env('TEST_EMAIL'));
    cy.get('#Password').type(Cypress.env('TEST_PASSWORD'));
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();

 });
});


//Wird immer ein Redirect zum Login durchgeführt? - Ja 
//Sind nach Logout keine Daten mehr sichtbar? - Ja 
//Funktioniert nach erneutem Login wieder alles? - Ja 
//Logout und Zugriffsschutz funktionieren korrekt