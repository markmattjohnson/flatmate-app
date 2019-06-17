describe("Input-form", () => {
  beforeEach(() => {
    cy.visit("https://flatmate2019.herokuapp.com/todos");
  });

  it("focuses input on load", () => {
    cy.focused().should("have.class", "input");
  });

  it("accepts input", () => {
    const typedText = "Buy Milk";
    cy.get(".input")
      .type(typedText)
      .should("have.value", typedText);
  });
});
