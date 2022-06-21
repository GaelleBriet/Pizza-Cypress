describe("Test formulaire Pizzas", () => {
  it("passes", () => {
    cy.visit("https://exercices-webdev-pizza.netlify.app/ ");

    cy.get("#commande").should("have.css", "display", "none");

    cy.get("span .plus").first().click();

    cy.get("span .totalligne").first().should("have.text", "8");

    cy.get("#amount").should("have.value", "8");

    cy.get("#commande").should("have.css", "display", "block");

    cy.get("[data-id='1'] span.moins").dblclick();
    cy.get("[data-id='1'] span.qt").should("have.text", "0");

    cy.get("[data-id='1'] span.plus").dblclick();
    cy.get("[data-id='3'] span.plus").click();
    cy.get("[data-id='5'] span.plus").click();
    cy.get("[data-id='6'] span.plus").dblclick();
    cy.get("#amount").should("have.value", "58");

    cy.get("#description").should(
      "have.value",
      "reine x 2 - napolitaine x 1 - aubergine x 1 - royale x 2"
    );
  });
});
