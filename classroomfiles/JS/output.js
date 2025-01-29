console.log("This is my output")
//single line comment 
/*
multi line comments 
*/

//JavaScript uses the keywords var, let and const to declare variables.

//An equal sign is used to assign values to variables.
//The two variables price1 and price2 are declared with the const keyword.

//These are constant values and cannot be changed.

//The variable total is declared with the let keyword.

//The value total can be changed.
/*
When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.
Variables are containers for storing values.

Identifiers: 
The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.
*/
/*Data types- 
1. storing single value - primitive data type 
a. Number => storing the numbers 
let x=10;
let y=1.25;

b. string 
let name="ram"
let lastName='prasad'

2. sotring multiple values - reference datatype  or non primitive data type 

*/
let x=10;//number 
let name="ram" //string 
let istrue=true //boolean - true /false
let z; //undefined 
let abc=NaN
console.log(x)
console.log(name)
console.log(istrue)
console.log(z) //undefined
console.log(abc)
//multiple varaible declaration in a single statement 
let person = "John Doe", carName = "Volvo", price = 200;
console.log(person,carName,price)
//let person="ram"//Cannot redeclare block-scoped variable 'person'.ts(2451)
/*You cannot re-declare a variable declared with let or const.

This will not work:

let carName = "Volvo";
let carName;*/

let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
console.log($,$$$,$myMoney)
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
console.log(_lastName,_x,_100)
{let InternalX=10
    InternalX=30
}//with in same curly braces - blocked scope you can re declare the variable
let InternalX
let y=20

//Variables declared with let must be Declared before use
//console.log($X)
//let X=20 //Variables declared with let must be Declared before use
//var X=25

