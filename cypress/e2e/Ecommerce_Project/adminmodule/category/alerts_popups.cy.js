///<reference types="cypress"/>
describe('Automate JavaScript Alerts, Confirms, and Prompts', () => {
    beforeEach(() => {
      //Alerts  => only ok button exist in the prompt 
      //Confrim  alerts  => ok and cancel buttons to do allow or reject 
      //prompt => customer can enter or do some action . 

      // Navigate to the target page before each test
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    });
  
    it("default behavior of cypress for the alerts",()=>{
      cy.get('[onclick="jsAlert()"]').click()
      cy.get('#result').should('have.text','You successfully clicked an alert')

    })
    it('Handles an  alert in cypress-global window.alert()', () => {
      // Find the button that triggers the alert and click it
      cy.contains('Click for JS Alert').click(); //activating the alert on the screen 
      //cy.get('[onclick="jsAlert()"]').click()
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
      //Fires when your app calls the global window.alert() method. 
      // Cypress will auto accept alerts. You cannot change this behavior.
        // Assert the alert message
        expect(text).to.equal('I am a JS Alert');
        
        //expect is the new way to add assertions to the yeilded subject 
      })
 
      // Validate the result message on the page
      cy.get('#result').should('contain', 'You successfully clicked an alert');
    });
  
    it('Handles a  confirm (Accept)-window.confirm() - click yes to get true', () => {
      // Trigger the confirm dialog
      cy.contains('Click for JS Confirm').click();
  
      // Handle the confirm dialog and verify the message
      //Fires when your app calls the global window.confirm() method. Cypress will auto accept confirmations.
      //  Return false from this event and the confirmation will be canceled.
      cy.on('window:confirm', (text) => {
        expect(text).to.equal('I am a JS Confirm');
        //retrun - true => ok 
        //return - false => cancel 
      })
  
      // Validate the result message when "Ok" is clicked
      cy.get('#result').should('contain', 'You clicked: Ok');
    });
  
    it('Handles a JavaScript confirm (Cancel)', () => {

      Cypress.on('uncaught:exception', (err, runnable) => {
        //Fires when an uncaught exception occurs in your application. 
        // Cypress will fail the test when this fires. Return false from this event and 
        // Cypress will not fail the test. Also useful 
        // for debugging purposes because the actual error instance is provided to you
  // returning false here prevents Cypress from
  // failing the test
  return true
})
cy.contains('Click for JS Confirm').click();
      // Stub the confirm dialog to simulate "Cancel"
      cy.on('window:confirm', (text) => {

        expect(text).to.equal('I am a JS Confirm');
        return true
    } ); // Returning false simulates cancel
     
  
      // Validate the result message when "Cancel" is clicked
     // cy.get('#result').should('contain', 'You clicked: Cancel');
    
    

    });
  
    it('Handles a JavaScript prompt (Input and Accept)', () => {
      // Stub the prompt dialog to simulate input and acceptance
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('I am not in Test'); 
        // Simulate user input
      });
      //In end-to-end tests, replacing built-in window methods needs to happen after 
      // the page is visited, but before the application under test is loaded. 
      // You can do this by stubbing functions inside the 
      // cy.visit() command onBeforeLoad function.


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
  