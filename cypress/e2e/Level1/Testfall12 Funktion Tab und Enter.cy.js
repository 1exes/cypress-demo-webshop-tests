describe('Navigation über die Seite mit Tab und Enter', () => {
  it('sollte die Startseite laden', () => {


cy.visit('');
    cy.get('body').focus();
    cy.tab();
    cy.tab();
    cy.focused().type('{enter}')
  });
});
    