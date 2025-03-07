describe('API Test suite', () => {
    let userId;
    it('Retrieve  single user & multiple users- through get method', () => {
    
      //cy.request('URL')// call the get method
      // cy.request('MEthod',"url",options)
      cy.request('GET', `https://jsonplaceholder.typicode.com/users/2`)
          .then((response) => {
            // we are verifying response data is having the property as body or not 
            expect(response).to.have.property('body')
            //header is available as a property?
            expect(response).to.have.property('headers')
            //duration is available as a property
            expect(response).to.have.property('duration')
            //status is a property
            expect(response).to.have.property('status')
            expect(response.duration).to.be.lessThan(90)
            expect(response.status).to.eq(200); // Assert status code
            expect(response.body.id).to.eq(2)//verifying user ID in the response body
            //I would like to verify email exist in the response body
            //response.body.email
            //response.body.name
            // repsonse.body.website
            //response.body.company
            expect(response.body.email).to.eq('Shanna@melissa.tv')
            expect(response.body.name).to.eq("Ervin Howell")
            expect(response.body.website).to.eq("anastasia.net")
            expect(response.body.address.city).to.eq("Wisokyburgh")
          })

    })
    it.only('multiple users automation in api',function() {
    cy.request({
      url: `https://jsonplaceholder.typicode.com/users/11` ,
      method:'GET',
      failOnStatusCode:false
    }).then((response) => {
            expect(response.status).to.eq(404) // Assert status code
            expect(response.duration).to.be.lessThan(100)
           // expect(response.body).to.be.an('{}') 
            // Assert user ID
           // expect(response.body).to.have.length(10)
          })

      }) 
     

  it('Retrieve the users list through loop and get method', () => {
        for(let i=1; i<=10; i++){
            cy.log("i value:",i)
cy.request('GET', `https://jsonplaceholder.typicode.com/users/${i}`)
          .then((response) => {
            cy.log("current user ID in the response",response.body.id)
            expect(response.status).to.eq(200); // Assert status code
            expect(response.body.id).to.eq(i); // Assert user ID
           // expect(response.status).to.eq(404)

            
          })
        }
        /*cy.request('GET', `https://jsonplaceholder.typicode.com/users/11`,{failOnStatusCode:false})
          .then((response) => {

            expect(response.status).to.eq(404)
          })*/

      })
    
 
    it('create a new user through post method test', () => {

      const newUser1 = {
        name: 'new User1',
        email: 'newuser1@example.com',
        phone: '123-456-7890'
      }
      const newUser2 = {
        name: 'New User2',
        email: 'NewUser2@example.com',
        phone: '213-456-7890'
      }
  
      cy.request('POST', `https://jsonplaceholder.typicode.com/users`, newUser1)
        .then((response) => {
          expect(response.status).to.eq(201); // Assert status code
          expect(response.body).to.include(newUser1); // Assert response body
       userId = response.body.id; // Save user ID for later tests
       cy.log("newly added user ID",userId)
       cy.writeFile('cypress/fixtures/newUser1.json', response.body);

        })

        cy.request('POST', `https://jsonplaceholder.typicode.com/users`, newUser2)
        .then((response) => {
          expect(response.status).to.eq(201); // Assert status code
          expect(response.body).to.include(newUser2); // Assert response body
       userId = response.body.id; // Save user ID for later tests

       cy.log(userId)
       cy.writeFile('cypress/fixtures/newUser2.json', response.body);


        })

    })
          
    it('delete the user through the DELETE API', () => {
      cy.request({
        url: `https://jsonplaceholder.typicode.com/users/10`,
        method: 'GET',
        failOnStatusCode: false // We expect a 404 error
      }).then((response) => {
        expect(response.status).to.eq(200); // user is not found with status code 404
      })
      
      cy.request('DELETE', `https://jsonplaceholder.typicode.com/users/10`)
        .then((response) => {
          expect(response.status).to.eq(200); // Assert status code
        })
  
      // Verify the user is deleted
      cy.request({
        url: `https://jsonplaceholder.typicode.com/users/10}`,
        method: 'GET',
        failOnStatusCode: false // We expect a 404 error
      }).then((response) => {
        expect(response.status).to.eq(404); // user is not found with status code 404
      })
    })
  
  
    it.only('put',()=>{

      const newUser2 = {
        name: 'updated Name',
        email: 'updatedemail@example.com',
        phone: '213-456-9999'
      }
  
      cy.request('PUT', `https://jsonplaceholder.typicode.com/users/10`,newUser2)
        .then((response) => {
          expect(response.status).to.eq(200); // Assert status code
         expect(response.body).to.include(newUser2); // Assert response body
       userId = response.body.id; // Save user ID for later tests
       cy.log("newly added user ID",userId)
       cy.writeFile('cypress/fixtures/newUser2.json', response.body);
 cy.request('https://jsonplaceholder.typicode.com/users/10').then((response)=>{
  
  cy.log(response.body.name)
  //expect(response.body.name).to.eq('updated Name')
 })
        })


    })
      })

      //api testing
  