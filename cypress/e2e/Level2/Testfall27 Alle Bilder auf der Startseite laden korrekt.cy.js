describe('Alle Bilder auf der Startseite laden ', () => {
  it('sollte alle Biler auf der statseite laden ', () => {


cy.visit('');
cy.get('img').should('be.visible');



    
  });
});
