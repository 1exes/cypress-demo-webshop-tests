describe('Produkt zur Wunschliste hinzufügen', () => {
  it('fügt Buch "Ficition EX" zur wishlist hinzu', () => {

    cy.visit('/');
    cy.contains('Books').click();
    cy.visit('/fiction-ex')
    cy.get ('#add-to-wishlist-button-78').click();

  });
});
