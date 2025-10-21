describe('Apparel & Shoes anklicken, Überschriftsüberprüfung', () => {
  it('sollte den Apparel & Shoes klicken un dann gucken ob die Überschrift da ist ', () => {


cy.visit('');
cy.contains('Apparel & Shoes').click();
cy.contains('Apparel & Shoes').should('be.visible');


    
  });
});
