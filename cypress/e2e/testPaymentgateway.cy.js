describe('Automate Checkout Process on Kitchen Warehouse', () => {
  
    it('Fills Checkout Form and Enters Credit Card Details without iframe plugin', () => {
      // Step 1: Visit the Checkout Page
      cy.visit('https://kwh-kitchenwarehouse.netlify.app/checkout');
  
      // Step 2: Fill Email Address
      cy.get('input[name="email"]').eq(0).type('testuser@example.com');
  
      // Step 3: Fill Personal Details
      cy.get('input[name="firstName"]').type('John');
      cy.get('input[name="lastName"]').type('Doe');
      cy.get('input[name="address"]').type('123 Main Street');
      cy.get('input[name="city"]').type('New York');
      cy.get('select[name="country"]').select('United States');
      cy.get('input[name="zip"]').type('10001');
      cy.get('input[name="phone"]').type('9876543210');
  
      // Step 4: Handle Credit Card Fields inside an iFrame (Without Plugin)
      cy.get('iframe[title="secure payment field"]').then(($iframe) => {
        const iframeBody = $iframe.contents().find('body');
  
        cy.wrap(iframeBody).find('input[name="number"]').type('4111111111111111', { force: true });
        cy.wrap(iframeBody).find('input[name="expiration"]').type('12/25', { force: true });
        cy.wrap(iframeBody).find('input[name="cvv"]').type('123', { force: true });
      });
  
      // Step 5: Click on "Place Order"
      cy.get('button[type="submit"]').click();
  
        console.log(table[0].email)
        // Step 6: Verify Success Message
      cy.contains('Thank you for your order').should('be.visible');
    });
  });
  