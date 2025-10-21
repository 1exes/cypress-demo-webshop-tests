

describe('Demo-Webshop Startseite', () => {
  it('sollte die Startseite laden', () => {



    cy.visit('/');
    cy.contains('Demo Web Shop');





  });
});





