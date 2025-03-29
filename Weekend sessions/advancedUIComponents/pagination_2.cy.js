describe('E-commerce Pagination Test', () => {
    beforeEach(() => {

        cy.origin('http://192.168.29.238:8080/pagination.html', () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
              // returning false here prevents Cypress
              // inside the cy.origin() method from failing the test
              return false
            })
          })
     // cy.visit('http://192.168.29.238:8080/pagination.html');
    });
  
    it('Displays the correct number of products per page', () => {
      cy.get('.product').should('have.length', 8); // Ensure 8 products are displayed on the first page
    });
  
    it('Navigates to the next page and displays correct products', () => {
      cy.contains('Next').click();
      cy.get('.product').first().should('contain', 'Product 9');
    });
  
    it('Returns to the previous page correctly', () => {
      cy.contains('Next').click();
      cy.contains('Previous').click();
      cy.get('.product').first().should('contain', 'Product 1');
    });
  
    it('Shows active state on the current page button', () => {
      cy.get('.pagination button.active').should('contain', '1');
      cy.contains('Next').click();
      cy.get('.pagination button.active').should('contain', '2');
    });
  });
  