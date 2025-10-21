describe('Newsletter mit ungültiger E-Mail Adresse abonieren', () => {
  it('soll den Newsletter mit ungültiger E-Mail Adresse abonieren ', () => {

cy.visit('/') 

cy.visit('/') 
cy.contains('Log in').click();
    cy.get('#Email').type(Cypress.env('TEST_EMAIL'));
    cy.get('#Password').type(Cypress.env('TEST_PASSWORD'));
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();
    cy.get('#newsletter-email').type('aeio123@ gmd.de')
    cy.get('#newsletter-subscribe-button').click()



  });
});





//Wird die Fehlermeldung immer angezeigt? -  Ja 
//Wird keine E-Mail versendet? - Nein
//Ist das Abo nach Korrektur möglich?- Ja 