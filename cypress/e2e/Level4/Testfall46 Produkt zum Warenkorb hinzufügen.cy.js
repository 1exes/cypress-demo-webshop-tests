describe('Produkt in Warenkorb legen', () => {
  it('fügt "Buch" hinzu', () => {
    cy.visit('/');
    cy.contains('Books').click();
    cy.visit('/computing-and-internet')
    cy.get ('#add-to-cart-button-13').click({multiple:true});
  });
});
