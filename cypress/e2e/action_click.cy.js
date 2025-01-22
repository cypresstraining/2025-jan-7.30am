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
})