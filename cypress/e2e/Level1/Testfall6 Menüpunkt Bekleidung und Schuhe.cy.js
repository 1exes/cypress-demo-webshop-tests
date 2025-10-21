describe('Toolbar  Apparel & Shoes prüfen', () => {
  it('sollte Menüpunkt Apparel & Shoes prüfen ob sichtbar', () => {


cy.visit("' + Cypress.config('baseUrl') + '/")
cy.contains("Apparel & Shoes").should("be.visible");

    
  });
});
