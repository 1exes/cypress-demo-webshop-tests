describe('wishlist anzeigen', () => {
  it('es soll die wunschliste angezeigt werden', () => {
    cy.visit('/');
    cy.get('span.cart-label').contains('Wishlist').click();
  });
});
