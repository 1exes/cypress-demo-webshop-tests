describe('Log In mit ungültigem Password', () => {
  it('es soll sich mit falschem Passwort angemeldet werden ', () => {
  

cy.visit('/') 

cy.get('.ico-login') 
      .should('be.visible') 
      .click()  
cy.get('#Email').type(Cypress.env('TEST_EMAIL')) 
cy.get('#Password').type('2255334')
cy.get('#RememberMe').click()
cy.get('.button-1.login-button').should('be.visible').click();


  })
})
