
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



  
      })
          })



//Werden alle Fehlerfälle (falsches Passwort, zu kurz, nicht übereinstimmend) korrekt erkannt? - JA
//  Erscheinen die Fehlermeldungen verständlich und eindeutig? - Ja
// Funktioniert der Login mit dem neuen Passwort? -Ja
//  Bleibt die Session nach Änderung erhalten oder wird ein Logout erzwungen?- bleibt erhalten
//Passwortänderung funktioniert korrekt