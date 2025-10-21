describe('Footer-Link testen', () => {
it('sind sichtbar', () => {
    cy.visit('');
    cy.contains('Facebook').should('be.visible');
    cy.contains('Twitter').should('be.visible');
    cy.contains('YouTube').should('be.visible');
    
  });

});
