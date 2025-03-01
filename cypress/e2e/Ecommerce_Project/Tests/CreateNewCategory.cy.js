import createCategory from "../Pages/adminPages/catalog/createCategory"
describe("Create a new category",()=>{
    const createCategory1 = new createCategory()
     // this step is used to create an object for the class createCategory
     //once object is created then we can access all the methods of the class
     //by calling this object.methodname we can access the methods of the class

    beforeEach(()=>{
        createCategory1.visitAdminPage()
        //accessing teh visitAdminPage method of the class createCategory after importing the class through object
        createCategory1.login('admin@yourstore.com','adminadmin')
        //accessing the login method of the class createCategory after importing the class through object
        })
    it("Create a new category",()=>{
        createCategory1.createCategory('Electronics')
        //accessing the createCategory method of the class createCategory after importing the class through object

    })
    afterEach(()=>{
        cy.log("Iam in the after each block")
        createCategory1.VerifyLogout()
    })
})