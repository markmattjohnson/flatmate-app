import { isContext } from "vm";

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

  context("Form submission", () => {
    it("Adds a new todo on submit", () => {
      const itemText = "Buy eggs";
      cy.server();
      cy.route("POST", "/api/todos", {
        name: itemText,
        id: 1,
        isComplete: false
      });

      cy.get(".input")
        .type(itemText)
        .type("{enter}");
      cy.get(".todo")
        .should("have.length", 1)
        .and("contain", itemText);
    });
  });
});
