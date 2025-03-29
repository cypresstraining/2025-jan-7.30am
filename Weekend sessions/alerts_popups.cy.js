///<reference types="cypress"/>
describe('Automate JavaScript Alerts, Confirms, and Prompts', () => {
    beforeEach(() => {
      // Navigate to the target page before each test
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    });
  
    it('Handles a JavaScript alert', () => {
      // Find the button that triggers the alert and click it
      cy.contains('Click for JS Alert').click();
  //here a prompt or alert comes to the picture - if you do not want to test it 
  //cypress will handle that as a default action - click on ok button with in the alert
  // but if you want to test the ok button button outcome with assertions 
  //defnetly we need to use window:alert event in cy.on("window:alert",) ,method 
   //cy.on('window:confirm', (str) => { }
 // cy.on('window:alert', (str) => {}
   // cy.on('uncaught:exception',(arg1,ar2)=>{})
   //    // Handle the alert dialog using cy.on
   // we need to test the text displayed on the alert window 
      cy.on('window:alert', (text) => {
        // Assert the alert message
        expect(text).to.equal('I am a JS Alert');
      });
 
      // Validate the result message on the page
      cy.get('#result').should('contain', 'You successfully clicked an alert');
    });
  
    it('Handles a JavaScript confirm (Accept)', () => {
      // Trigger the confirm dialog
      cy.contains('Click for JS Confirm').click();
  
      // Handle the confirm dialog and verify the message
      cy.on('window:confirm', (text) => {
        expect(text).to.equal('I am a JS Confirm');
      });
  
      // Validate the result message when "Ok" is clicked
      cy.get('#result').should('contain', 'You clicked: Ok');
    });
  
    it('Handles a JavaScript confirm (Cancel)', () => {

       Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
      // Stub the confirm dialog to simulate "Cancel"
      cy.on('window:confirm', () => {

        expect(text).to.equal('I am a JS Confirm');
        return false
    } ); // Returning false simulates cancel
      cy.contains('Click for JS Confirm').click();
  
      // Validate the result message when "Cancel" is clicked
      cy.get('#result').should('contain', 'You clicked: Cancel');
    
    

    });
  
    it('Handles a JavaScript prompt (Input and Accept)', () => {
      // Stub the prompt dialog to simulate input and acceptance
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('I am not in Test'); 
        // Simulate user input
      });
      cy.contains('Click for JS Prompt').click();
  
      // Validate the result message reflecting the input
      cy.get('#result').should('contain', 'You entered: I am not in Test');
    });
  
    it('Handles a JavaScript prompt (Cancel)', () => {
      // Stub the prompt dialog to simulate cancel
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns(null); // Simulate cancel
      });
      cy.contains('Click for JS Prompt').click();
  
      // Validate the result message reflecting the cancel action
      cy.get('#result').should('contain', 'You entered: null');
    });
  });
  