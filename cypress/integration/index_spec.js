describe('Open Homepage and test', () => {
  it('Should show fixed nav bar when scroll down', () => {
    cy.visit('/');

    cy.scrollTo('bottom');

    cy.get('.fixed-navbar')
      .should('have.class', 'fixed-navbar--show')
      .and('have.css', 'position', 'fixed');
  });
});
