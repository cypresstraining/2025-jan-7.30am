describe('API Test suite', () => {
    //const baseUrl = 'https://jsonplaceholder.typicode.com'; 
    let userId;
    it('Retrieve  single user & multiple users- through get method', () => {
        cy.request('GET', `https://jsonplaceholder.typicode.com/users/2`)
          .then((response) => {
            expect(response.status).to.eq(200); // Assert status code
            expect(response.duration).to.be.lessThan(100)
            expect(response.body.id).to.eq(2)
          })

          cy.request('GET', `https://jsonplaceholder.typicode.com/users/1/posts`)
          .then((response) => {
            expect(response.status).to.eq(200) // Assert status code
            expect(response.duration).to.be.lessThan(130)
            expect(response.body).to.be.an('array') // Assert user ID
          })

      }) 
     

      it('Retrieve the users list through loop and get method', () => {
        for(let i=1; i<=10; i++){
            cy.log("Loop",i)
        cy.request('GET', `https://jsonplaceholder.typicode.com/users/${i}`)
          .then((response) => {
            expect(response.status).to.eq(200); // Assert status code
            expect(response.body.id).to.eq(i); // Assert user ID
            
          })
        }
      })
    
    
    
    it('create a new user through post method test', () => {
        //Create test data to create a new user like name, email and phone 
        //Declare an array with details 

      const newUser1 = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890'
      }
      const newUser2 = {
        name: 'New User2',
        email: 'NewUser2@example.com',
        phone: '213-456-7890'
      }
  
      cy.request('POST', `https://jsonplaceholder.typicode.com/users`, newUser2)
        .then((response) => {
          expect(response.status).to.eq(201); // Assert status code
          expect(response.body).to.include(newUser2); // Assert response body
       userId = response.body.id; // Save user ID for later tests
       cy.log(userId)
        })

        cy.request('POST', `https://jsonplaceholder.typicode.com/users`, newUser1)
        .then((response) => {
          expect(response.status).to.eq(201); // Assert status code
          expect(response.body).to.include(newUser1); // Assert response body
       userId = response.body.id; // Save user ID for later tests
       cy.log(userId)

        })
    })
          
    it('delete the user through the DELETE API', () => {
      cy.request('DELETE', `https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
          expect(response.status).to.eq(200); // Assert status code
        })
  
      // Verify the user is deleted
      cy.request({
        url: `https://jsonplaceholder.typicode.com/users/${userId}`,
        method: 'GET',
        failOnStatusCode: false // We expect a 404 error
      }).then((response) => {
        expect(response.status).to.eq(404); // user is not found with status code 404
      })
    })
  
    
      })
  