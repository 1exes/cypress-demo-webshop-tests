describe('Bücher sortieren', () => {
  it('nach Preis von günstig nach teuer', () => {
    cy.visit('/books');
    cy.get('select#products-orderby').select('Price: Low to High');
  });
});

