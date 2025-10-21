describe('Toolbar  Digital downloads prüfen', () => {
  it('sollte Menüpunkt Digital downloads prüfen ob sichtbar', () => {


cy.visit("' + Cypress.config('baseUrl') + '/")
cy.contains("Digital downloads",).should("be.visible");

    
  });
});
