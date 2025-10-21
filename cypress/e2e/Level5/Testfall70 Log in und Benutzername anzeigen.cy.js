describe('Log in und Benutzername anzeigen', () => {
  it('sollte sich anmelden und den Benutzernamen anzeigen', () => {
    // Using custom login command
    cy.login();

    // Verify user is logged in and account is visible
    cy.shouldBeLoggedIn();
    cy.get('.account').should('be.visible').first().click();
  });
});
