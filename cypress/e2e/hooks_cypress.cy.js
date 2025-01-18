describe("test suite for hooks",()=>{
    after(()=>{
        cy.log("I am a after hook , I will execute after all tests - only once")
    })
  

    before(()=>{
        cy.log("i am a before hook - i will execute before all tests -only once")
    })
    beforeEach(()=>{ //before every test- it()
        cy.log("i am a beforeEach hook")
    })

    it.skip("MY first test",()=>{
        cy.log("I am in my first test -")
    })
    it("MY second test",()=>{
        cy.log("I am in my second test -")
    })
    afterEach(()=>{ // this will execute after every test - it()
        cy.log("i am a afterEach hook")})
    it("MY third test",()=>{
        cy.log("I am in my third test -")
    })
    it("MY fourth test",()=>{
        cy.log("I am in my fourth test -")
    })
    it("MY last test -5",()=>{
        cy.log("I am in my last-5 test -")
    })
   
     
   
   

})
/*
firsr we will execute before() hook - Before-All
next look for beforeEach() hook this will execute before every test- 
next your first it block -  
next if afterEach is available that will execute 
next beforeEach for second test 
next second test body 
next if available afterEach()
next after() hook 

Note: if you skip last test then afterAll will not be in your execution list 
only if last test is participated in the execution then only afterAll will appear
it.only()for any test we can execute all hooks. 
note: if you skip first test then beforeAll will not be executed .
as first test is skipped beforehook also skipped 
if you enable it.only then both beforeAll and after all also execute without any complication 


*/