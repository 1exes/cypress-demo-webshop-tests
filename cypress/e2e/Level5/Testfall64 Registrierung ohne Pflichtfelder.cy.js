describe('Registrieruung ohne Pflichtfelder ', () => {
  it('es soll sich registriert werden ohne Pflichtfelder', () => {
  

cy.visit('/') 

    cy.get('.ico-register') 
      .should('be.visible') 
      .click() 
    cy.url().should('include', '/register')
    cy.get('#gender-male').click()
    cy.get('#register-button').click()
    
  })
})
