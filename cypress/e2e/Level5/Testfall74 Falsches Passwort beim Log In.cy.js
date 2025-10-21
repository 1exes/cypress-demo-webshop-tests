describe('Log Out ', () => {
  it('es soll sich erfolgreich ausloggen', () => {
  

cy.visit('/') 

cy.get('.ico-login') 
      .should('be.visible') 
      .click() 
cy.get('#Email').type(Cypress.env('TEST_EMAIL')) 
cy.get('#Password').type('12345675566')
cy.get('#RememberMe').click()
cy.get('.button-1.login-button').should('be.visible').click();

  })
})
