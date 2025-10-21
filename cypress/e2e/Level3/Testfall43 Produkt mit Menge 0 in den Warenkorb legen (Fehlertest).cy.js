describe('Fehlertest mit Menge 0', () => {

it('Menge 0 ergibt Fehler', () => {
  cy.visit('/books');
  cy.get('.product-item').first().click();
  cy.get('.qty-input').clear().type('0');
  cy.get('[value="Add to cart"]').click();
  cy.get('.message-error').should('be.visible');
});
});
