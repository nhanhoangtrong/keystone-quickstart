describe('Go to Contact page and test', () => {
  let contactData;
  beforeEach(() => {
    cy.fixture('contact-example').then(json => (contactData = json));
    cy.visit('/contact');
  });

  it('Should show contact form', function() {
    cy.get('#contact-page')
      .find('.contact-form')
      .should('be.visible');
  });

  it('Should submit contact form and show success alert', function() {
    cy.get('.alert-success').should('not.to.exist');
    cy.get('.alert-danger').should('not.to.exist');

    cy.get('[name="contactName"]').type(contactData.name);
    cy.get('[name="contactEmail"]').type(contactData.email);
    cy.get('[name="contactDescription"]').type(contactData.description);

    cy.get('[type="submit"]').click();

    cy.get('.alert-success').should('to.be.visible');
  });
});
