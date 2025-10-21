describe('Footer-Link', () => {
  it('öffnet Produktliste vergleichen', () => {
    cy.visit('');
    cy.contains('Compare products list').click();
    cy.url().should('include', '/compareproducts');
  });
});
