describe(' Cookies setzen', () => {
  it('sollte alle Cookies auf der Demowebshopseite setzen', () => {


cy.visit('');
cy.getCookies().should('not.be.empty');



    
  });
});
