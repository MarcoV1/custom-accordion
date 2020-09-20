
describe("Main app", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("should display the main page", () => {
    // check our page header
      cy.get('h1').should('contain', 'Have a question? We can help');
  });

  it("should have the correct number of question items from the server", () => {
    cy.get('[data-test=question-item]').should('have.length', 5)
      .and('be.visible');
  });

  it("should click the icon and expand the answer", () => {
    cy.get('.toggle-icon').first().click();
    cy.get('.question-card-answer').first().should('be.visible');
  });


});
