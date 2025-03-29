describe("comments apis",function(){

    it("use aliasing to play with api",function(){
        cy.request('comments')//send the request to the server with cy.request- get method
        .as('comments') //we are giving nickname for later use 

cy.get('@comments')//make a request to the server and yielded subject taken into response varaible 
.should((response) => {
    //response.body 
    //response.status 
    //response
    //response.duraiton
    //response.header 
  expect(response.body)
  .to.have.length(500)
  //length => to have length 
  expect(response).to.have.property('headers')
  //checking that this response is yielded the property as headers and duration 

  expect(response).to.have.property('duration')
  //expect(response.duration).to.be.eq(200)
  expect(response.duration).to.lessThan(1000)
})
    })

    it("post method",function(){
        cy.request('POST', 'http://localhost:8888/users/admin', { name: 'Jane' }).then(
  (response) => {
    // response.body is automatically serialized into JSON
    expect(response.body).to.have.property('name', 'Jane') // true
  }
)
    })
})