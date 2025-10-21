describe('Toolbar  Computer prüfen', () => {
  it('sollte Menüpunkt Computer prüfen ob sichtbar', () => {


cy.visit("' + Cypress.config('baseUrl') + '/")
cy.contains("Computer").should("be.visible");

    
  });
});
