//named export - export class Vehicle
//default export is  export default Vehicle
export class Vehicle {
  constructor(type) {//constructor with in one argument 
    this.type = type;
  }

  describe() {//method with no argument 
    console.log(`This is a ${this.type}`);
    //console.log (this.type);
    //${this.type}

  }
}
//in future we can use POM(page object model )design pattern 
//we can use our selectors in one perticular class with pagename as a calss and pagename as a JS file name 
//so that in future if you are suppose to work on that page
//you can create or edit or delete  - manipulate or use those selectors to autoamte that page 
// we are differentiating the testing logic and selectors itnentioally to provide extra security to your code 
//code and selectos hided in the .cy.js file 
//it blocks do not have selectors instead we can use them with the help import and export features in the javascript classes. 
//whenever you want to reused the selector you are not suppose to write them in each test 
//instead we can call that selector by using import class or method 
