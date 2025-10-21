describe(' Gift Cards  anklicken, Überschriftsüberprüfung', () => {
  it('sollte den Button  Gift Cards  klicken un dann gucken ob die Überschrift da ist ', () => {


cy.visit('');
cy.contains(' Gift Cards ').click();
cy.contains(' Gift Cards ').should('be.visible');


    
  });
});
