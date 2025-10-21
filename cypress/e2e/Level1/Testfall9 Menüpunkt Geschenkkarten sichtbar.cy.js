describe('Toolbar  Gift Cards prüfen', () => {
  it('sollte Menüpunkt Gift Cards prüfen ob sichtbar', () => {


cy.visit("' + Cypress.config('baseUrl') + '/")
cy.contains('Gift Cards').should('be.visible');


    
  });

});
