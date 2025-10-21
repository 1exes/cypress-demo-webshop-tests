
describe('Namensfeld - Maximalwert Registrierung', () => {
  it('Test mit 3000 Zeichen um zu gucken ob der NAme zu lang ist ', () => {
    cy.visit('/register');
    cy.get('input[name="FirstName"]').clear().type('A'.repeat(3000));
    cy.get('input[name="LastName"').clear().type('B'.repeat(3000));
    cy.get('#Email').type(Cypress.env('TEST_EMAIL'));
    cy.get('#Password').type(Cypress.env('TEST_PASSWORD'));
    cy.get('#ConfirmPassword').type(Cypress.env('TEST_PASSWORD'));
    cy.get('#register-button').click();
  });
});


