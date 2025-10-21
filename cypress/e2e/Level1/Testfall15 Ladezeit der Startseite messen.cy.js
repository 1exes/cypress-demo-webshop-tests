describe('Ladezeit messen', () => {
  it('Ladezeit', () => {
    cy.visit('/').then(() => {
      cy.window().then(w => {
        const ladezeit = w.performance.timing.loadEventEnd - w.performance.timing.navigationStart;
        cy.log(`${ladezeit} ms`);
      });
    });
  });
});
