describe("Input-form", () => {
  it("focuses input on load", () => {
    cy.visit("https://flatmate2019.herokuapp.com/todos");
    cy.focused().should("have.class", "input");
  });
});
