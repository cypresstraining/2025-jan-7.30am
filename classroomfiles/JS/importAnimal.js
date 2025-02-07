import { Animal, PI, add } from './animal.js';
//named import for class, variable and function
const dog = new Animal('Dog'); //creating a object for Animal class 
dog.sound();

console.log(`Value of PI: ${PI}`);
console.log(`Addition result: ${add(5, 10)}`);
