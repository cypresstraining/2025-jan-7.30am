describe('Web Table Automation', () => {
    beforeEach(() => {
        // Visit the page where the table is hosted
        cy.visit('http://192.168.29.238:8081/HTMLCode/webTable.html'); //copy paste your internal http server URL

    });

    it('should read data from the web table and assert values', () => {
       
        cy.get('h1').should('have.text','Sample Data Table')
         // Check if the table exists
        cy.get('#dataTable').should('exist');

        // Verify the number of rows (excluding header)
        cy.get('#dataTable tbody tr').should('have.length', 3);
        cy.get('#dataTable').find('tbody').find('tr').should('have.length', 3);

        // Extract and assert specific data

        //cy.get('#dataTable tbody tr').eq(0).
        //cy.get('#dataTable tbody tr').eq(1).
        //cy.get('#dataTable tbody tr').eq(2).


        cy.get('#dataTable tbody tr').each(($row, index) => {
           // cy.log(row)
            //cy.log(index)
            const name = $row.find('td').eq(0).text(); // Get the Name column
            const age = $row.find('td').eq(1).text();  // Get the Age column
            const city = $row.find('td').eq(2).text();  // Get the City column

            // Assertions based on row index
            //cy.log("iteration",index)
            if (index === 0) {
                cy.log("iteration",index)
                expect(name).to.equal('John Doe');
                expect(age).to.equal('30');
                expect(city).to.equal('New York');
            } else if (index === 1) {
                cy.log("iteration",index)
                expect(name).to.equal('Jane Smith');
                expect(age).to.equal('25');
                expect(city).to.equal('Los Angeles');
            } else if (index === 2) {
                cy.log("iteration",index)
                expect(name).to.equal('Sam Wilson');
                expect(age).to.equal('35');
                expect(city).to.equal('Chicago');
            }
        });
    });

    it('should find and assert specific cell data', () => {
        // Assert the specific value for "Jane Smith"
        cy.get('#dataTable tbody tr').contains('Jane Smith').parent().find('td').eq(1).should('have.text', '25');
        cy.get('#dataTable tbody tr').contains('Chicago').parent().find('td').eq(1).should('have.text', '35');
        cy.get('#dataTable tbody tr').contains('30').parent().find('td').eq(0).should('have.text', 'John Doe')
        cy.get('#dataTable tbody tr').contains('30').parent().find('td').eq(2).should('have.text','New York')


    
    });
});
