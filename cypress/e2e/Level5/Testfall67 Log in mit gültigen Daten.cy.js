describe('Log In mit gültigen Log In Daten', () => {
  it('es soll sich erfolgreich angemeldet werden', () => {
    // Using custom login command with credentials from environment
    cy.login();

    // Verify user is logged in
    cy.shouldBeLoggedIn();
  });
});
