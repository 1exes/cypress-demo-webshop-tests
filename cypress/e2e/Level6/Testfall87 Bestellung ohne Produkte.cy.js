describe('Bestellung ohne Produkte im Warenkorb', () => {
  it('soll eine Bestellung ausführen ohne das Produkte in den Warenkorb gelegt werden ', () => {
    cy.visit('/') 


 cy.contains('Log in').click();
    cy.get('#Email').type(Cypress.env('TEST_EMAIL'));
    cy.get('#Password').type(Cypress.env('TEST_PASSWORD'));
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();
cy.visit('/create-it-yourself-jewelry')
cy.get('#product_attribute_71_10_16').type('4')
cy.get('#add-to-cart-button-71').click();
cy.get('.cart-label').first().click()
cy.get('#termsofservice').click()
cy.get('#checkout').click()
cy.get('input.button-1.new-address-next-step-button').eq(0).click();
cy.get('input.button-1.new-address-next-step-button').eq(1).should('be.visible').click();
cy.get('input.button-1.shipping-method-next-step-button').should('be.visible').click();
cy.get('input.button-1.payment-method-next-step-button').should('be.visible').click();
cy.get('input.button-1.payment-info-next-step-button').should('be.visible').click();
cy.get('input.button-1.confirm-order-next-step-button').should('be.visible').click();
  })
})


// Der Test läuft 
// Fehlermeldung kam und war klar zu sehen im Testfall