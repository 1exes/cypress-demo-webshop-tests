describe('Computerss anklicken, Überschriftsüberprüfung', () => {
  it('sollte den Computers klicken un dann gucken ob die Überschrift da ist ', () => {


cy.visit('');
cy.contains('Computers').click();
cy.contains('Computers').should('be.visible');


    
  });
});
