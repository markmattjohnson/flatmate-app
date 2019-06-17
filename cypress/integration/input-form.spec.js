describe("Input-form", () => {
  beforeEach(() => {
    cy.visit("/");
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
