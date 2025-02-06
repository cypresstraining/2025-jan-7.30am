//class is  blue print of object 
//object is a single item with different properties 
class Vehicle { //parent 
    //write methods /varaibles / etc...
    constructor(type,brand){
      this.type=type // this is a keyword - to identify the right object 
      this.brand=brand
console.log("My vehicle belongs to ",type,brand)


    }
        
    VehicleModel(model){
        console.log("My car modle is :", model)
    }
    vehiclePrice(price){
        console.log("my car price:",price)
    }
    vechicleType(type){
        console.log("My vehicle type:",type)
    }
    vehicleTest(){
        console.log("I am done with the test drive!")
       
    function speak(type,brand){

        return console.log("Iam  in speak function")
    }
    }

    
    



}

function speak(type,brand){

    return console.log("Iam  in speak function")
}

// If  I want to use any other Vehicle class methods then we need to 
//create an object and with the help of object we need to call that perticular method

//how to create an object  - objname=new Classname()
const myVechicle=new Vehicle("Car","Tata Motors") //how to create an object 
myVechicle.VehicleModel("Nexon")
myVechicle.VehicleModel("punch")
myVechicle.vechicleType("Electrical")
myVechicle.vehiclePrice(1500000)
myVechicle.vechicleType("Petrol")
myVechicle.vechicleType("Diesel")
myVechicle.vehicleTest(speak())

const newVehicle= new Vehicle("testtype","testBrand") // creating a new object  - new vehicle - seocnd vechicle 
newVehicle.VehicleModel("newModel")
newVehicle.vechicleType("newType")
newVehicle.vehiclePrice("NewPrice")
newVehicle.vehicleTest()
//if you are not creating any constructor by default I am creating the cosntructor as a JS 

//create one more class => child class to the Vehicle class 

class Car extends Vehicle{
    super(type,brand){ //parent constructor 
        console.log("I am in super constructor ")

    }
    
    /*constructor(my){
        this.my=my
        console.log("My child class constructor",my)
    }*/
   
    carOwner(name){
        console.log("My owner is :",name)

    }


}

//creating an object for the child class 
const myCar =new Car("car Type","car brand")
//first I call the parent constructor by using the super keyword
//object will be created and u can use this object 
//parent class  -  super(){}
//only one class then use constructor 

myCar.carOwner("Cypress")
myCar.vechicleType("ParentType")
myCar.vehiclePrice(100000000000)

export default Vehicle
//1. add an export statement in the source file  
//2. the above step leads to the module warning while executing the source file 
//3. .mjs or  "type": "module"  in package.json file 
//4. execute again . your code works
