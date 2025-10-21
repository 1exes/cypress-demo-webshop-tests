describe('Books Sichtbarkeitsüberprüfung', () => {
  it('Button Books überprüfen ob sichtbar', () => {


cy.visit("' + Cypress.config('baseUrl') + '/")
cy.contains("Books").should("be.visible");

    
  });

});
