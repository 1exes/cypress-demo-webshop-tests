describe('Newsletter Funktion ', () => {
  it('soll den Newsletter abonieren und deabonieren können ', () => {
    cy.visit('/') 

 cy.contains('Log in').click();
    cy.get('#Email').type(Cypress.env('TEST_EMAIL'));
    cy.get('#Password').type(Cypress.env('TEST_PASSWORD'));
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();

    cy.get('#newsletter-email').type(Cypress.env('TEST_EMAIL'))
    cy.get('#newsletter-subscribe-button').click()





  })
})


// Problem: ich habe keine deaboniren Funktion gefunden
// abonieren funktioniert korrekt 

