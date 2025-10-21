describe('Suchfeld sichtbar Überprüfung', () => {
  it('soll überprüfen, ob das Suchfeld sichtbar ist', () => {
    cy.visit('');
    cy.get('#small-searchterms', { timeout: 10000 }).should('be.visible');
  });
});
