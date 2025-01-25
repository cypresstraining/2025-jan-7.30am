///<reference types="cypress" />
describe("traversal commands test suite",()=>{
/* Traversal commands used to navigate between different UI elements without using complex selectors
   improtant list of commands in traversal cokmmands : 
mostwidely used to traversal command is eq
eq(0) => first element in the list  => indext start with zero
eq(-1)=> last element in the list 
eq(2)=> 3rd element in the list 

   1.find => select all decendent selectors 
   2.filter() => existance of matched selector 
   3.first() => locate the first element from the list 
   4.next() => travel to next element from the current selection
   5.last() => last element from the list 
   6.nextAll ()/nextUntill -prevAll/PRevUntill = based on need we can look for it 
   7.not() => remove the element from the list 
   8.prev()
*/

    beforeEach(()=>{
        cy.visit('https://example.cypress.io')
    })
    it("traversal commands page",()=>{
        cy.contains("Commands").click() // click on commands dropdown
        cy.get('.dropdown-menu>li:nth-child(2)').click() //select the second element in the dropdown menu - traversal 
        cy.url().should('eq','https://example.cypress.io/commands/traversal') //checking that is the resulting url is matches with traversal url or not (https://example.cypress.io/commands/traversal)
        cy.get('h1').should('have.text','Traversal')
    })
    it('children command in traversal',()=>{
        // it traceout children of the current selection 
        cy.contains("Commands").click() // click on commands dropdown
        cy.get('.dropdown-menu>li:nth-child(2)').click() //select the second element in the dropdown menu - traversal 
       
        cy.get('.traversal-breadcrumb')
          .children('.active')
          .should('contain', 'Data')
    })
    
    it('closest()- ancestor command in traversal',()=>{
        // it traceout children of the current selection 
        cy.contains("Commands").click() // click on commands dropdown
        cy.get('.dropdown-menu>li:nth-child(2)').click() //select the second element in the dropdown menu - traversal 
        cy.get('.traversal-badge')
        .closest('div')
        .should('have.class', 'well')
         })
         it("first/last/next",()=>{
            cy.contains("Commands").click() // click on commands dropdown
           //cy.get('.dropdown-menu>li:nth-child(2)').click() //select the second element in the dropdown menu - traversal 
            cy.get('.dropdown-menu').find('li')
           // .eq(1)
           .first()
           .next()
            .click()
            //find is used to -Get the descendent DOM elements of a specific selector.
            cy.url().should('eq','https://example.cypress.io/commands/traversal') //checking that is the resulting url is matches with traversal url or not (https://example.cypress.io/commands/traversal)
            cy.get('h1').should('have.text','Traversal')
            cy.contains("Commands").click() // click on commands dropdown
            //cy.get('.dropdown-menu>li:nth-child(2)').click() //select the second element in the dropdown menu - traversal 
             cy.get('.dropdown-menu').find('li').last().click()
           cy.url().should('eq',"https://example.cypress.io/commands/spies-stubs-clocks")


         })
         it("nextAll,nextuntill",()=>{
            cy.contains("Commands").click() // click on commands dropdown
            //cy.get('.dropdown-menu>li:nth-child(2)').click() //select the second element in the dropdown menu - traversal 
            cy.get('.dropdown-menu').find('li')
            //.eq(1)
            .last()
            .prev()
             .click()
            //.first()
            //.next()
             //.click()
             cy.contains("Commands").click() // click on commands dropdown
             //cy.get('.dropdown-menu>li:nth-child(2)').click() //select the second element in the dropdown menu - traversal 
             cy.get('.dropdown-menu').find('li').first().next().click()
             
//filter- specififc selector we will resturn
//cy.get('li').filter(':contains("Services")').should('have.length', 2)
            cy.get('.traversal-nav').find('li')
  //.filter('.active')//selector match with filter 
  .filter(':contains("About")') //text match with filter
  .should('contain', 'About')
  //nextAll 
  cy.get('.traversal-next-all')
  .contains('oranges')
  .nextAll()
  .should('have.length', 3)
  cy.get('.traversal-next-all')
  .contains('oranges')
  .nextAll()
  .last()
  .should('have.text','grapes')
  //prevAll
  cy.get('.traversal-next-all')
  .contains('grapes')
  .prevAll()
  .should('have.length',4)
  //nextUntil 
  cy.get('#veggies')
  .nextUntil('#nuts').should('have.length', 3)
  cy.get('#nuts')
  .prevUntil('#veggies').should('have.length', 3)


         })

         it.only("not - remove from the test",()=>{
          cy.contains("Commands").click()
          cy.get(".dropdown-menu").find("li").eq(1).click()
            cy.get('.traversal-disabled .btn')
            .filter('[disabled]') // this is to identify the existance
            .should('contain', 'Disabled')

            cy.get('.traversal-disabled .btn')
            .not('[disabled]') //this is used to remove the existance
            .should('not.contain', 'Disabled')

            //parent 
            cy.get('.traversal-mark')
            .parent().should('contain', 'Morbi leo risus')
            //parents 
            cy.get('.traversal-cite')
            .parents().should('match', 'blockquote')
            //parentsUntill 
            cy.get('.clothes-nav')
            .find('.active')
            .parentsUntil('.clothes-nav')
            //Get all ancestors of each DOM element in a set of matched DOM elements up to, 
            // but not including, the element provided.
            .should('have.length', 2)
            //sibblings - 
            cy.get('.traversal-pills .active')
            .siblings().should('have.length', 2)
         })

})