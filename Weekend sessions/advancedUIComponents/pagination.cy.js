describe('Product Pagination Automation', () => {
    before(() => {
        // Visit the page where the pagination is hosted
        cy.visit('http://192.168.29.238:8080/Practise/pagination.html'); // Adjust the URL as necessary
    //after runnning your http start statement your terminal popup with your ip address
    //replace that ip address
    
    });

    it('should navigate through the products using pagination', () => {
        const products = [
            { name: 'Product 1', price: '$10.00' },
            { name: 'Product 2', price: '$15.00' },
            { name: 'Product 3', price: '$20.00' },
            { name: 'Product 4', price: '$25.00' },
            { name: 'Product 5', price: '$30.00' },
            { name: 'Product 6', price: '$35.00' },
            { name: 'Product 7', price: '$40.00' },
            { name: 'Product 8', price: '$45.00' },
            { name: 'Product 9', price: '$50.00' },
            { name: 'Product 10', price: '$55.00' },
        ];

        // Loop through each product
        products.forEach((product, index) => {
            // Assert the product name and price
            cy.get('#productName').should('have.text', product.name);
            cy.get('.product p').should('have.text', `Price: ${product.price}`);

            // Assert the page info
            cy.get('#pageInfo').should('have.text', `Page ${index + 1} of ${products.length}`);

            // Navigate to the next product if not on the last page
            if (index < products.length - 1) {
                cy.get('#nextBtn').click();
            }
            else{
                cy.get('#nextBtn').should('not.be.enabled') 
                cy.get('#prevBtn').should('be.enabled');
 
            }
        });

        // Verify the Previous button is disabled on the first page
        cy.get('#prevBtn').should('not.be.disabled');
        
        // Navigate back to the first product
        cy.get('#prevBtn').click(); // Go to Product 9
        cy.get('#prevBtn').click();// product 8
        cy.get('#prevBtn').click();// product 7
        cy.get('#prevBtn').click();// product 6
        cy.get('#prevBtn').click();// product 5
        cy.get('#prevBtn').click();// product 4
        cy.get('#prevBtn').click();// product 3
        cy.get('#prevBtn').click();// product 2
        cy.get('#prevBtn').click();// product 1
        cy.get('#prevBtn').should('be.disabled'); // Previous should still be disabled

        // Navigate to the last product
        cy.get('#nextBtn').click(); // Product 2
        cy.get('#nextBtn').click(); // Product 3
        cy.get('#nextBtn').click(); // Product 4
        cy.get('#nextBtn').click(); // Product 5
        cy.get('#nextBtn').click(); // Product 6
        cy.get('#nextBtn').click(); // Product 7
        cy.get('#nextBtn').click(); // Product 8
        cy.get('#nextBtn').click(); // Product 9
        cy.get('#nextBtn').click(); // Product 10

        // Verify the Next button is disabled on the last page
        cy.get('#nextBtn').should('be.disabled');
    });
});
