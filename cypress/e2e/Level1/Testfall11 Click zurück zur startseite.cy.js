describe('Button zur startseite ', () => {
  it('sollte überprüfen ob der Buttton der zur Startseite führt klickbar ist ', () => {


cy.visit("' + Cypress.config('baseUrl') + '/")
cy.get(".header-logo > a:nth-child(1) > img:nth-child(1)").click();

    
  });
});
