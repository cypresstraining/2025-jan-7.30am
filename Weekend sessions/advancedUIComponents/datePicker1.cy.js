describe('Datepicker Automation', () => {
    before(() => {
        // Replace with the correct URL of your served HTML file
        cy.visit('http://192.168.29.238:8081/HTMLCode/datepicker.html');
    });

    it('should select a date from the datepicker', () => {
        // Open the datepicker
        const date=5
        const month= 10
        const year='2028'
        const months = [
                'January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December'
            ];
        
cy.log('selected month is ',months[month-1])
        cy.get('#datepicker').clear().type(month+'/'+date+'/'+year)
        cy.get('.ui-datepicker-month').should('have.text',months[month-1])
        cy.get('.ui-datepicker-year').should('have.text',year)
        cy.get('.ui-state-default.ui-state-active.ui-state-hover').should('have.text',date)

       
    });
});
