//import '@testing-library/cypress/add-commands';

describe('Tooltip Automation with realHover', () => {
  it('should display the correct tooltip on hover', () => {
    cy.visit('https://razorpay.com/docs/playground/api-orders-fetch-all/');

     // Find the "Authorized" tooltip trigger and hover
     //cy.contains('authorized')
     cy.get('body > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2) > svg:nth-child(1)')
     //.trigger('mouseover')
     .click()
     //.realHover();
    cy.get('.jGKyJa')
     // Verify that the tooltip appears and contains expected text
     //cy.get('.chakra-tooltip') // Replace with actual tooltip class
     .should('be.visible')
     cy.get('.idpjET > p')
             .and('contain', '  Possible values');
  });
});
