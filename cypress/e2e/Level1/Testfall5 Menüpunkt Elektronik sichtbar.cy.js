describe('Toolbar  Electronics prüfen', () => {
  it('sollte Menüpunkt Electronics prüfen ob sichtbar', () => {


cy.visit("' + Cypress.config('baseUrl') + '/");
    cy.contains('Electronics', { timeout: 10000 }).should('be.visible');
  });
});
