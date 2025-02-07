//this is an application file which is importing the different JS files related code 
import { Car } from './cars.js'; //this is importing the named export 
import Bike from './Bike.js';
const myCar = new Car('Toyota', 'Corolla');
myCar.describe(); //describe() is from parent class Vehicle
myCar.details(); //details() is from imported class Car  

const myBike = new Bike("Honda", "Shine")
myBike.describe();
myBike.details();
myBike.fuelType("Petrol")