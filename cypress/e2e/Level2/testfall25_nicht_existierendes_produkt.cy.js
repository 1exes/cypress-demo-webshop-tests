
describe('Nicht existierendes Produkt prüfen', () => {
it('soll das Produkt nicht finden', () => {
cy.visit('');
cy.get('input[name="q"]').type('SuperLaptop 5000{enter}');
cy.contains('No products were found that matched your criteria.').should('be.visible');
});
});

