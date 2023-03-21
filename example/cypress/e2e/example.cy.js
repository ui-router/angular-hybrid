describe('example app', () => {
  it('loads', () => {
    cy.visit('');
  });

  it('renders links', () => {
    cy.visit('/');
    cy.get('a').contains('app.ng1.ng2');
    cy.get('a').contains('app.ng2.ng2');
  });

  it('renders angularjs', () => {
    cy.visit('');
    cy.get('a').contains('app.ng1').click();
    cy.url().should('include', '#!/ng1');
    cy.contains('ng1 component');
  });

  it('renders angular', () => {
    cy.visit('');
    cy.get('a').contains('app.ng2').click();
    cy.url().should('include', '#!/ng2');
    cy.contains('ng2 component');
  });

  it('renders angular inside angularjs', () => {
    cy.visit('');
    cy.get('a').contains('app.ng1.ng2').click();
    cy.url().should('include', '#!/ng1/ng2');
    cy.contains('ng1 component');
    cy.contains('ng2 component');
  });

  it('renders angular inside angular', () => {
    cy.visit('');
    cy.get('a').contains('app.ng2.ng2').click();
    cy.url().should('include', '#!/ng2/ng2');
    cy.contains('ng2 component');
  });
});
