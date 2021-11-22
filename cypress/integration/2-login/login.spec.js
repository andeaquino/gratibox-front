/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Login", () => {
  it("should login successfully", () => {
    cy.visit("http://localhost:3000/login");

    cy.get("input[placeholder=Email]").type("a@a.com");
    cy.get("input[placeholder=Senha]").type("12345678");
    cy.contains("Login").click();

    cy.url().should("equal", "http://localhost:3000/planos");
  });

  it("should show error message for invalid params", () => {
    cy.visit("http://localhost:3000/login");

    cy.get("input[placeholder=Email]").type("a@a.com");
    cy.get("input[placeholder=Senha").type("12345679");
    cy.contains("Login").click();

    cy.contains("Email ou senha inválidos").should("be.visible");
  });
});
