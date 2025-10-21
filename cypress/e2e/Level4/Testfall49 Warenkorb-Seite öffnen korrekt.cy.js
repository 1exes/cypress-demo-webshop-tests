describe('Warenkorb-Seite öffnen', () => {
  it('öffnet die Warenkorb-Seite', () => {
  cy.visit("' + Cypress.config('baseUrl') + '/")
  cy.get('.cart-label').first().click()
  });
});
