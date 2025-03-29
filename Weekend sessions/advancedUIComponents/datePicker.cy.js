describe('Date Picker Automation with External Data', () => {
    before(() => {
        // Visit the page where the date picker is hosted
        cy.visit('http://192.168.29.238:8081/HTMLCode/date.html'); // Adjust the URL if necessary
    });

    it('should select a date from the date picker using external data', () => {
        // Load the JSON file
        cy.fixture('dateValues').then((data) => {
            const day = data.date;
            const month = data.month; // Use zero-based index for month
            const year = data.year;

            // Open the date picker
            //#datepicker
            cy.get('#datepicker').click();

            // Select the month and year
            //select[aria-label='Select month']
            cy.get('.ui-datepicker-title').first().click(); // Open month/year selector
            cy.get('.ui-datepicker-year').select(year); // Select the year
            cy.get('.ui-datepicker-month').select(month-1); // Select the month

            // Select the day
            cy.get('[data-handler="selectDay"]').contains(day).click() // Click on the specified day

            // Assert that the selected date is displayed correctly
            //both month and day are two digit numbers 
            const expectedDate = `${month}/${day}/${year}`; // Format: MM/DD/YYYY
           //only moth having double digit number and day is having single digit 
            const expectedDate1 = `${month}/0${day}/${year}`; // Format: MM/DD/YYYY
            //both day and moth are sigle digit number for these numbers we are adding prefix as "0"
            const expectedDate2 = `0${month}/0${day}/${year}`; // Format: MM/DD/YYYY
            //only moth is single digit => add prefix to the moth only 
            const expectedData3= `0${month}/${day}/${year}`
            if(day<=9 & month<=9) {//conditon for single digit number identification

            cy.get('#datepicker').should('have.value',expectedDate2)
            cy.get('#selectedDate').should('have.value', expectedDate2);
              }
              else if(day<=9 & month>9){//conditon for day is single digit and moth is double digit 
                  cy.get('#datepicker').should('have.value',expectedDate1)
                  cy.get('#selectedDate').should('have.value', expectedDate1);

                   }
             else if(day>9 & month<=9){ //condtion for only month is signle digit 
             cy.get('#datepicker').should('have.value',expectedData3)
             cy.get('#selectedDate').should('have.value',expectedData3);

                  }
                  else {//both are double digit 
                  cy.get('#datepicker').should('have.value',expectedDate)
                  cy.get('#selectedDate').should('have.value', expectedDate);

                   }
        
        });
    });
});
