describe('Ändere das Passwort im Benutzerkonto', () => {
  it('soll das Passwort im Benutzerkonto ändern ', () => {

cy.visit('/') 
cy.contains('Log in').click();
    cy.get('#Email').type(Cypress.env('TEST_EMAIL'));
    cy.get('#Password').type(Cypress.env('TEST_PASSWORD'));
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();
    cy.get('a.account').first().click();
    cy.contains('a.inactive', 'Change password').click();
    cy.get('#OldPassword').type(Cypress.env('TEST_PASSWORD'))
    cy.get('#NewPassword').type(Cypress.env('TEST_PASSWORD'))
    cy.get('#ConfirmNewPassword').type(Cypress.env('TEST_PASSWORD'))
    cy.get('.button-1.change-password-button').click()



  });
});
    
   
//Wird ein erneuter Login erzwungen? - Nein
//Funktioniert das alte Passwort nicht mehr? - Nein
//Kommt die Bestätigungsmail korrekt an?- Nein
// Mail Postfach exsistiert nicht 
// Session bleibt aktiv
//Folgende Probleme gefunden: Passwort wurde erfolgreich geändert , aber es kam keine Mail sondern nur eine Benachrichtigung
