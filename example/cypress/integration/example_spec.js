describe('example app', () => {
  it('loads', () => {
    cy.visit('http://localhost:4000');
  });

  it('renders links', () => {
    cy.visit('http://localhost:4000/');
    cy.get('a').contains('app.ng1.ng2');
    cy.get('a').contains('app.ng2.ng2');
  });

  it('renders angularjs', () => {
    cy.visit('http://localhost:4000');
    cy.get('a').contains('app.ng1').click();
    cy.url().should('include', '#!/ng1');
    cy.contains('ng1 component');
  });

  it('renders angular', () => {
    cy.visit('http://localhost:4000');
    cy.get('a').contains('app.ng2').click();
    cy.url().should('include', '#!/ng2');
    cy.contains('ng2 component');
  });

  it('renders angular inside angularjs', () => {
    cy.visit('http://localhost:4000');
    cy.get('a').contains('app.ng1.ng2').click();
    cy.url().should('include', '#!/ng1/ng2');
    cy.contains('ng1 component');
    cy.contains('ng2 component');
  });

  it('renders angular inside angular', () => {
    cy.visit('http://localhost:4000');
    cy.get('a').contains('app.ng2.ng2').click();
    cy.url().should('include', '#!/ng2/ng2');
    cy.contains('ng2 component');
  });
});
