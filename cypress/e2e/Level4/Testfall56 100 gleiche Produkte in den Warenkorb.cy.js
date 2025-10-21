describe('100 gleiche Produkte im Warenkorb', () => {
  it('soll 100 gleiche Produkte in den Warenkorb hinzufügen', () => {

    cy.visit('/')
    cy.contains('Books').click();
    cy.contains('Computing and Internet').first().click()
    cy.get('#addtocart_13_EnteredQuantity').clear().type(100)
    cy.get('#add-to-cart-button-13').click()





 });
});    



