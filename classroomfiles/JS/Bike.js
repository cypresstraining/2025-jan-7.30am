//named import  import {exported item} from "location of the file"
//default import import classname from "location of the file"
//only exported classes avaialble in this JS file to use 
import { Vehicle } from './Vehicle.js';
//extends the imported class 
//here vehicle is a parent class that extended to the class car 

//named export car to  use this in another JS file 

class Bike extends Vehicle {
  constructor(brand, model) {//child class constuctor
    super('Bike'); // Calling the parent class constructor
    this.brand = brand;
    this.model = model;
  }

  details() {
    console.log(`${this.brand} ${this.model} is a type of ${this.type}`);
  }
  fuelType(fuel){
    console.log(`${this.brand} ${this.model} is a type of ${this.type} and accepting the fuel :`, fuel );
  }
}

export default Bike