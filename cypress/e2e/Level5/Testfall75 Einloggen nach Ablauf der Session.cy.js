describe('Session Timeout Test (Einfach)', () => {

  it('prüft ob Session nach Inaktivität abläuft', () => {

    cy.visit('/');
    cy.contains('Log in').click();
    cy.get('#Email').type(Cypress.env('TEST_EMAIL'));
    cy.get('#Password').type(Cypress.env('TEST_PASSWORD'));
    cy.get('input[value="Log in"]').click();
    cy.wait(1000000)
    cy.contains('a', 'Orders').click()

   
  });

});

// Session bleibt aktiv



