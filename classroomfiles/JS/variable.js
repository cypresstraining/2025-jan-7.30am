//Javascript files do have extentionas .js
//.ts is used to save the file type script 
// how to store a value in the JS 
//Variables are Containers for Storing Data
/*JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const
*/

//var dataForFrontend = null;
//var is used to declare a variable in the JS 
//var name
//var name=10 
//let x=10  // is used to declare a variable where we can change this value in the future 

//x=20
//const pi=3.14 //pi is always 3.14  - this should not change in the future 
//we declare as const varaible when that variable should not chage in future.
//we can not able to change the value of const variable 
//pi=4.12//

//automatically declaring a variable before you use.

//In this first example, x, y, and z are undeclared variables.

//They are automatically declared when first used:
//to print outputs on the console,
//console.log("this is my print test")
//console.log(x)
//console.log(y)
//cosole.log(z)
//console.log("my sum:",z)
//Example
//x = 5;
//y = 6;
//z = x + y;
console.log(x)//// ReferenceError: Cannot access 'x' before initialization - for let 
console.log(y)// // ReferenceError: Cannot access 'y' before initialization - for let 
console.log(z)//before initialization of variable declared with var - return undeifed instead of initialization error 
// if you use any variable before initialization 
//- declared as var  - then it refer as undefied value - no error for var  - var is very old declaration type - first declaration type 
//- declared as let - then it reference to the error while runnign the script- ReferenceError: Cannot access 'x' before initialization
console.log("I am printing my sum of x,y in the console:",z)
//Note:
//It is considered good programming practice to always declare variables before use.

//Declare the varaible with var keyword 
var x = 5; // you can re- declare with var but not with let 
var y = 6;
var z = x + y;
console.log("var x value:",x) //// ReferenceError: Cannot access 'x' before initialization
console.log(y)
console.log(z)
console.log("I am printing my sum of x,y in the console:",z)
//declaring the same variables through let 
/*let x = 5; //re-declare the same varaible is not possible with  let
let y = 6; //assigning the value to the variable  is nothing but initialization
let z = x + y;
console.log("var x value:",x)
console.log(y)
console.log(z)
console.log("I am printing my sum of x,y in the console:",z)*/

//declare a variable with var /let/const 
var name  // if you initialize that value you use if not undefined value you can print 
let qualication // you initialize before you use it 
const gender = "male" // for const initialization  is must 
var name  //re-declare the variable with var 

 //Cannot redeclare block-scoped variable 'qualication'.ts(2451)
 {
    let qualication
    let qualication

 }