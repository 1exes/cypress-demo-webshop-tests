
describe('Logo prüfen', () => {
  it('soll prüfen ob das logo sichtbar ist ', () => {


cy.visit("' + Cypress.config('baseUrl') + '/")

cy.get('img[src="/Themes/DefaultClean/Content/images/logo.png"]').should('be.visible');

  });
});
