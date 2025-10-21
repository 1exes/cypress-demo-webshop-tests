describe('Log Out Funktion testen', () => {
  it('sollte sich erfolgreich ausloggen', () => {
    // Login first using custom command
    cy.login();

    // Verify logged in
    cy.shouldBeLoggedIn();

    // Logout using custom command
    cy.logout();

    // Verify logged out
    cy.shouldBeLoggedOut();
  });
});
