describe("click test suite",()=>{
    beforeEach(()=>{
        cy.visit('https://example.cypress.io/commands/actions')
    })
    it("click basic test",()=>{
      //class="btn btn-lg btn-danger action-btn"
      cy.get(".btn.btn-lg.btn-danger.action-btn").click()
      cy.get(".btn.btn-lg.btn-danger.action-btn").click("left")
      cy.get(".btn.btn-lg.btn-danger.action-btn").click("right")
      cy.get(".btn.btn-lg.btn-danger.action-btn").click("center")
      //cy.get(".btn.btn-lg.btn-danger.action-btn").click("top",{force:true})
      //cy.get(".btn.btn-lg.btn-danger.action-btn").click("topLeft")
      //cy.get(".btn.btn-lg.btn-danger.action-btn").click("topRight")
      //cy.get(".btn.btn-lg.btn-danger.action-btn").click("bottom")
      //cy.get(".btn.btn-lg.btn-danger.action-btn").click("bottomLeft")
      //cy.get(".btn.btn-lg.btn-danger.action-btn").click("bottomRight")
     cy.get('#action-canvas').click()
     cy.get('#action-canvas').click("center")
     cy.get('#action-canvas').click('topLeft')
cy.get('#action-canvas').click('top')
cy.get('#action-canvas').click('topRight')
cy.get('#action-canvas').click('left')
cy.get('#action-canvas').click('right')
cy.get('#action-canvas').click('bottomLeft')
cy.get('#action-canvas').click('bottom')
cy.get('#action-canvas').click('bottomRight')

//specify  the location of the element where we need to click through x, y coordinates
cy.get('#action-canvas').click(80, 75) // click 80px on x coord and 75px on y coord
cy.get('#action-canvas').click(170, 75)
cy.get('#action-canvas').click(80, 165)
cy.get('#action-canvas').click(100, 185)
cy.get('#action-canvas').click(125, 190)
cy.get('#action-canvas').click(150, 185)
cy.get('#action-canvas').click(170, 165)
cy.get('.action-opacity>.btn')
//.click()
.click({ force: true })//forcebly clicking on the element - eventhough it is cogvered by other elements 
cy.get('.action-labels').find('.label').click({multiple:true})
//cy.click() can only be called on a single element. Your subject contained 6 elements. Pass { multiple: true } if you want to serially click each element
//{force:true} => to forcibly click on the selected element 
//{multiple:true} => used to click on all results seuqnnetially one after another

    })
    it("dblclick",()=>{
        
        //.action-div - default class name before dblclick()
        cy.get('.action-div')
        .dblclick()
        //action-div.hidden
      // cy.get('.action-div').should('not.be.visible')
    //  input[value='Double click to edit']
       //cy.get('.action-input-hidden').should('be.visible')
       cy.get("input[value='Double click to edit']").type("i am in hidden textbox ")
    })
    it.only("rightclick()",()=>{
        // Our app has a listener on 'contextmenu' event in our 'scripts.js'
// that hides the div and shows an input on right click
cy.get('.rightclick-action-div').rightclick()
cy.get('.rightclick-action-div').should('not.be.visible')
cy.get('.rightclick-action-input-hidden')
.should('have.value',"Right click to edit")
.should('be.visible')
cy.get('.rightclick-action-input-hidden').clear().type("this is right click test")
cy.get('.rightclick-action-input-hidden').should('have.value',"this is right click test")

    })
    it.only("submit",()=>{
        cy.get('.action-form')
  .find('[type="text"]').type('HALFOFF')
      
cy.get('.action-form').submit()
cy.get('.action-form').next().should('contain', 'Your form has been submitted!')
    })

    it.only("scroolIntoView",()=>{
        // normally all of these buttons are hidden,
// because they're not within
// the viewable area of their parent
// (we need to scroll to see them)
cy.get('#scroll-horizontal button')
.should('not.be.visible')
// scroll the button into view, as if the user had scrolled
cy.get('#scroll-horizontal button').scrollIntoView()
cy.get('#scroll-horizontal button')
  .should('be.visible')


  cy.get('#scroll-vertical button')
  .should('not.be.visible')

// Cypress handles the scroll direction needed
cy.get('#scroll-vertical button').scrollIntoView()
cy.get('#scroll-vertical button')
  .should('be.visible')

  // Cypress knows to scroll to the right and down
cy.get('#scroll-both button').scrollIntoView()
cy.get('#scroll-both button')
  .should('be.visible')
    })
    it.only("ScrollTo",()=>{
        // if you chain .scrollTo() off of cy, we will
// scroll the entire window
cy.scrollTo('bottom')

cy.get('#scrollable-horizontal').scrollTo('right')

// or you can scroll to a specific coordinate:
// (x axis, y axis) in pixels
cy.get('#scrollable-vertical').scrollTo(250, 250)

// or you can scroll to a specific percentage
// of the (width, height) of the element
cy.get('#scrollable-both').scrollTo('75%', '25%')

// control the easing of the scroll (default is 'swing')
cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear' })

// control the duration of the scroll (in ms)
cy.get('#scrollable-both').scrollTo('center', { duration: 2000 })
    })
    it.only("trigger the input value",()=>{
        // To interact with a range input (slider)
// we need to set its value & trigger the
// event to signal it changed

// Here, we invoke jQuery's val() method to set
// the value and trigger the 'change' event
cy.get('.trigger-input-range')
//input[value=0]
//.invoke('r') //based on typed character we will get list of results
.invoke('val', 90) //slider moved to value25
cy.get('.trigger-input-range')
.trigger('change')//trigger the change of invoke val=25
//.trigger("change")
cy.get('.trigger-input-range')
.get('input[type=range]').siblings('p')
.should('have.text', '90')
    })
})