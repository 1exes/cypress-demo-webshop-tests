describe('Kontaktformular absenden ', () => {
  it('soll das Kontaktformular absenden  ', () => {

cy.visit('/') 
cy.contains('Log in').click();
    cy.get('#Email').type(Cypress.env('TEST_EMAIL'));
    cy.get('#Password').type(Cypress.env('TEST_PASSWORD'));
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();

cy.contains('a', 'Contact us').click()
cy.get('#Enquiry').type(' Mein Gerät funktioniert nicht wie erwartet bitte um Rückmeldung. Mit freundlichen Grüßen Johni')
cy.get('.button-1.contact-us-button').click()






  });
});


//Erscheint immer eine Bestätigung? -Ja 
//Kommt die Mail korrekt an? -Nein 
//Wird die Anfrage in der Historie angezeigt?- Nein
// Mail Postfsch nicht auffindbar, wird in keiner Historie angezeigt, aber eine Bestätigung erscheint.
