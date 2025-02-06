//i want to call class methods exist in the Vehicle class in the Vechileclass.js file 
//export and import 
//export the class in the source Javascript file 
//import the class in the destination java script file 
//moddules is a package required to import and export the classes between different js file to do so 
//.mjs as an extention - 
// package.json => types="modules"
//import Car from "./vechicles_class";
import Vehicle from "./vechicles_class.mjs"
//const importedCar=new Car("SUV","Ford")

const importedVehicle=new Vehicle("MYtype","mybrand")