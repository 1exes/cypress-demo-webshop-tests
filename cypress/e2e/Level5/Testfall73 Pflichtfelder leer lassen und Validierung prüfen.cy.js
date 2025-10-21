describe('Log Out ', () => {
  it('es soll Pflichtfelder leer lassen und sich anmelden ', () => {
  

cy.visit('/') 

cy.get('.ico-register') 
      .should('be.visible') 
      .click() 
      
cy.get('#gender-male').click()
cy.get('#register-button').click()

  })
})
