describe("Automating CAPTCHA in Cypress", () => {
    before(() => {
      cy.visit("https://www.google.com/recaptcha/api2/demo");
    });
  
    it("Solves CAPTCHA manually & saves session", () => {
      cy.wait(25000); // Manually solve CAPTCHA
      cy.get("button[type='submit']").click();
  
      // Save session cookies to bypass CAPTCHA next time
      cy.getCookies().then((cookies) => {
        cy.writeFile("cypress/fixtures/cookies.json", cookies);
      });
    });
  
    it("Uses saved session to bypass CAPTCHA", () => {
      cy.readFile("cypress/fixtures/cookies.json").then((cookies) => {
        cookies.forEach((cookie) => {
          cy.setCookie(cookie.name, cookie.value);
        });
      });
  
      cy.visit("https://www.google.com/recaptcha/api2/demo");
      cy.get("button[type='submit']").click(); // CAPTCHA won't appear
    });
  });
  