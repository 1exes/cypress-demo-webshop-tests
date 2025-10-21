describe('Toolbar  Jewelry prüfen', () => {
  it('sollte Menüpunkt Jewelry prüfen ob sichtbar', () => {


cy.visit("' + Cypress.config('baseUrl') + '/")
cy.contains("Jewelry").should("be.visible");

    
  });
});
